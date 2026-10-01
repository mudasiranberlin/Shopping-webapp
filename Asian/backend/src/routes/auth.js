import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { protect } from "../middleware/auth.js";
const router = Router();
const tokenFor = (user) => jwt.sign({ id:user._id, role:user.role }, process.env.JWT_SECRET, { expiresIn:process.env.JWT_EXPIRES_IN || "7d" });
router.post("/register", async (req,res,next)=>{
  try {
    const {name,email,password}=req.body;
    if(!name||!email||!password) return res.status(400).json({success:false,message:"Name, email and password are required"});
    if(password.length<8) return res.status(400).json({success:false,message:"Password must be at least 8 characters"});
    const existing=await User.findOne({email});
    if(existing) return res.status(409).json({success:false,message:"Email is already registered"});
    const user=await User.create({name,email,password:await bcrypt.hash(password,12)});
    res.status(201).json({success:true,message:"Account created successfully",data:{user:{id:user._id,name:user.name,email:user.email,role:user.role},token:tokenFor(user)}});
  } catch(e){next(e)}
});
router.post("/login", async(req,res,next)=>{
  try {
    const {email,password}=req.body;
    const user=await User.findOne({email}).select("+password");
    if(!user || !(await bcrypt.compare(password,user.password))) return res.status(401).json({success:false,message:"Invalid email or password"});
    res.json({success:true,message:"Login successful",data:{user:{id:user._id,name:user.name,email:user.email,role:user.role},token:tokenFor(user)}});
  } catch(e){next(e)}
});
router.get("/me",protect,async(req,res)=>res.json({success:true,data:{user:req.user}}));
export default router;
