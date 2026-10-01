import {Router} from "express"
import { changeCurrentPassword, getCurrentUser, getUserChannelProfile, getWatchHistory, loginUser, logoutUser, refreshAcessToken, registerUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
import {verifyjwt} from "../middlewares/auth.middleware.js"
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyjwt,logoutUser)

router.route("/refresh-token").post(refreshAcessToken)

router.route("/change-password").post(verifyjwt,changeCurrentPassword)

router.route("/current-user").get(verifyjwt,getCurrentUser)

router.route("/update-account").patch(verifyjwt,updateAccountDetails)

router.route("/avatar").patch(verifyjwt,upload.single("avatar"),updateUserAvatar)

router.route("/cover-Image").patch(verifyjwt,upload.single("coverImage"),updateUserCoverImage)

router.route("/c/username").get(verifyjwt,getUserChannelProfile)

router.route("/history").get(verifyjwt,getWatchHistory)


export default router

