import {v2 as cloudinary } from 'cloudinary'
import fs from 'fs'


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const UploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null 
        //Upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        //File has been uploaded sucessfully
        fs.unlinkSync(localFilePath)
        console.log("File is Uploaded on CLoudinary",response.url);
        return response
        
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the local saved file
        return null
        
    }
}

export {UploadOnCloudinary}