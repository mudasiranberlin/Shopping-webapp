import {asyncHandler} from "../utils/AsyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"
import {UploadOnCloudinary} from "../utils/cloudinary.js"
import jwt from "jsonwebtoken";
import mongoose from "mongoose"


const generateAccessAndRefreshToken = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken=refreshToken
        user.save({validateBeforeSave:false})

        return {accessToken,refreshToken}
        
    } catch (error) {
        throw new ApiError(500,"Something went wrong Generating the access and refresh token ")
    }
}

const registerUser = asyncHandler(async (req,res) => {
    const {username,password,fullName,email} = req.body
    if ([fullName,email,password,username].some((feild)=>{feild?.trim() ===""})) {
        throw new ApiError(400,"All feilds are Required")
    }
    const existedUser= User.findOne({
        $or:[{username},{email}]
    })

    if (!existedUser) {
         throw new ApiError(409,"User already Existed")
    }
    const avatarLocalPath= req.files?.avatar[0]?.path
    // const coverImageLocalPath = req.files?.coverImage[0]?.path

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length>0) {
        coverImageLocalPath = req.files.coverImage[0].path
        
    }
    if (!avatarLocalPath) {
         throw new ApiError(400,"Avatar file is Required")
    }
    const avatar= await UploadOnCloudinary(avatarLocalPath)
    const coverImage= await UploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400,"Avatar file is Required")
    }
    
    const user = await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url ||"",
        email,
        password,
        username:username.toLowerCase()
    })

    const createdUser= await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser) {
         throw new ApiError(500,"Something went wrong while creting the user")
    }

    return res.status(200).json(
        new ApiResponse(200,createdUser,"User registred Sucessfully")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    // User must provide username or email
    if (!(username || email)) {
        throw new ApiError(400, "Please enter the username or email");
    }

    // Password is required
    if (!password) {
        throw new ApiError(400, "Please enter the password");
    }

    // Find user using username OR email
    const user = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    console.log("user:", user);

    // Compare entered password with hashed password
    const isPasswordValid = await user.isPasswordCorrect(password);

    console.log("password valid:", isPasswordValid);

    // if (!isPasswordValid) {
    //     throw new ApiError(401, "Password incorrect");
    // }

    // Generate tokens
    const { accessToken, refreshToken } =
        await generateAccessAndRefreshToken(user._id);

    // Remove sensitive fields
    const loggedInUser = await User.findById(user._id)
        .select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User logged in successfully"
            )
        );
});

const logoutUser = asyncHandler(async (req,res) => {
    await User.findById(
        req.user._id,{
        $unset:{
            refreshToken:1

//             this removes the feild from the document
//             Want to change a value? Use $set.
// 👉          Want to delete a field? Use $unset.
//             Operator	Meaning
//             $set	✏️ Change/set the value
//             $unset	🗑️ Remove the field
//             $set: { refreshToken: null }	Set it to null
//             $set: { refreshToken: undefined }	Not the correct way to delete it
        }
    },
    {
        new:true
    }
    )
    const options= {
        httpOnly:true,
        secure:true
    }
    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200,{},"User Logged Out"))
})

const refreshAcessToken = asyncHandler(async (req,res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
    if (!incomingRefreshToken) {
        throw new ApiError(200,"Unauthorized Access")
    }
    try {
        const decodedToken = jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id)
    
    if (!user) {
        throw new ApiError(401,"Invalid refresh Token")  
    }
      if (!incomingRefreshToken !== user?.refreshToken) {
         throw new ApiError(401,"Refresh token is expired or Used")  
      }
      const options= {
        httpOnly:true,
        secure:true
      }
      const {accessToken,newrefreshToken}=await generateAccessAndRefreshToken(user_id);
    
      return res
      .status(200)
      .cookie("accessToken",accessToken,options)
      .cookie("refreshToken",newrefreshToken,options)
      .json(
        new ApiResponse(
            200,
            {accessToken,refreshToken:newrefreshToken},"Access token Refreshed"
        )
      )
    } catch (error) {
        throw new ApiError(401,error?.message ||"Invalid Refresh Token")
    }

})

const changeCurrentPassword = asyncHandler(async (req,res) => {
    const {oldPassword,newPassword} = req.body
    const user = await User.findById(req.user?._id);
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
    if (isPasswordCorrect) {
        throw new ApiError("Invalid old Password")
    }
     user.password=password
     await user.save({validateBeforeSave:false})
     return res
     .status(200)
     .json(new ApiResponse(200,{},"Password has been changed sucessfully"))
})

const getCurrentUser = asyncHandler(async (req,res) => {
    return res
    .status(200)
    .json(200,req.user,"Current User Fetched Sucessfully")
})

const updateAccountDetails = asyncHandler(async (req,res) => {
    const {fullName,email} =req.body
    if (!fullName || !email) {
        throw new ApiError(400,"Please Enter the Fullname and email")
    }
    User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                fullName,
                email:email
            }
        },
        {new:true}
    ).select("-password")

    return res
    .status(200)
    .json(200,user,"Account details Updated Sucessfully")

})

const updateUserAvatar = asyncHandler(async (req,res) => {
    const avatarLocalPath = req.files?.path
    if (!avatarLocalPath) {
        throw new ApiError(400,"Avatar file is Missing")
    }
    const avatar = await UploadOnCloudinary(avatarLocalPath)
    if (!avatar) {
        throw new ApiError(400,"Error Uploading the avatar file")
    }

    await User.findByIdAndUpdate(
        req.user?._id,{
            $set:{
                avatar:avatar.url
            }
        },
        {new:true}
    ).select("-password")

    return res
    .status(200)
    .json(
        new ApiResponse(200,user,"Avatar image has beeen updated sucessfully")
    )
})

const updateUserCoverImage = asyncHandler(async (req,res) => {
    const CoverImageLocalPath = req.files?.path
    if (!CoverImageLocalPath) {
        throw new ApiError(400,"coverImage file is Missing")
    }
    const coverImage = await UploadOnCloudinary(CoverImageLocalPath)
    if (!avatar) {
        throw new ApiError(400,"Error Uploading the coverImage file")
    }

    await User.findByIdAndUpdate(
        req.user?._id,{
            $set:{
                coverImage:coverImage.url
            }
        },
        {new:true}
    ).select("-password")

    return res
    .status(200)
    .json(
        new ApiResponse(200,user,"Cover image has beeen updated sucessfully")
    )
})


const getUserChannelProfile = asyncHandler(async (req,res) => {
    const {username} = req.params
    if (!username?.trim()) {
        throw new ApiError(400,"Please enter the username")
    }
    const channel = await User.aggregate([
        {
            $match:{
                username:username?.toLowerCase()
            }
        },
        {
            $lookup:{
                from:"subscriptions",
                localField:"_id",
                foreignField:"channel",
                as: "subscribers"
            },
            $lookup:{
                from:"subscriptions",
                localField:"_id",
                foreignField:"channel",
                as: "subscribedTo"
            }
        },{
            $addFields:{
                subscribersCount:{
                    $size:"$subscribers",
                },
                channelsSubscribedToCount:{
                    $size:"$subscribedTo"
                },
                isSubscribed:{
                    $cond:{
                        if:{$in:[req.user?._id,"$subscribers.subscriber"]},
                        then:true,
                        else:false
                    }
                }
            }
        },
        {
            $project:{
                fullName:1,
                email:1,
                username:1,
                subscribersCount:1,
                isSubscribed:1,
                avatar:1,
                coverImage:1
            }
        }
    ])
    if (!channel?.length) {
        throw new ApiError(404,"Channel does not Exist")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,channel[0],"User channel fetched sucessfully")
    )
}) 

const getWatchHistory = asyncHandler(async (req,res) => {
    const user = await User.aggregate([
        {
            $match:{
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup:{
                from:"videos",
                localField:"watchHistor",
                foreignField:"_id",
                as:"watchHistory",
                pipeline:[
                    {
                        $lookup:{
                            from:"users",
                            localField:"owner",
                            foreignField:"_id",
                            as:"owner",
                            pipeline:[
                                {
                                    $project:{
                                        fullName:1,
                                        username:1,
                                        avatar:1
                                    }
                                },
                                {
                                    $addFields:{
                                        owner:{
                                            $first:"$owner"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ])

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,user[0].WatchHistory,
            "Watch History Fetched Sucessfully"
        )
    )
})



export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAcessToken,
    getCurrentUser,
    changeCurrentPassword,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getUserChannelProfile,
    getWatchHistory


}