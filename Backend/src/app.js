import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"15kb"}))

app.use(express.urlencoded({extended:true,limit:"15kb"}))

app.use(express.static("public"))

app.use(cookieParser())

//routes

import userRouter from './routes/user.routes.js'

import productRouter from './routes/product.routes.js'



//routes decleration 
app.use("/api/v1/users",userRouter)
// Send one
app.use("/api/v1/product",productRouter)


// http://localhost:8000//api/v1/users/register

// http://localhost:8000/users/login

export default app