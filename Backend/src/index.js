import dotenv from 'dotenv'
import mongoose from "mongoose";
import connectDB from './db/index.js';
import app from './app.js';

dotenv.config({
    path: './env'
    // path: './.env' if u get the error in dotenv write this 
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at the Port : ${process.env.PORT}`);
        
    })

})
.catch((err)=>{
    console.log("Mongo DB connection failed !!!",err);
    
})
