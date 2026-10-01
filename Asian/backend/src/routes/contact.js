import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";
import { protect, adminOnly } from "../middleware/auth.js";
const router=Router();
router.post("/",async(req,res,next)=>{
  try {
    const {name,email,subject,phone="",message}=req.body;
    if(!name||!email||!subject||!message) return res.status(400).json({success:false,message:"Name, email, subject and message are required"});
    const data=await ContactMessage.create({name,email,subject,phone,message});
    res.status(201).json({success:true,message:"Message sent successfully",data});
  }catch(e){next(e)}
});
router.get("/",protect,adminOnly,async(req,res,next)=>{
  try { res.json({success:true,data:await ContactMessage.find().sort({createdAt:-1})}); }catch(e){next(e)}
});
router.patch("/:id",protect,adminOnly,async(req,res,next)=>{
  try { const data=await ContactMessage.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true,runValidators:true}); if(!data)return res.status(404).json({success:false,message:"Message not found"}); res.json({success:true,message:"Message updated",data}); }catch(e){next(e)}
});
router.delete("/:id",protect,adminOnly,async(req,res,next)=>{
  try { const data=await ContactMessage.findByIdAndDelete(req.params.id); if(!data)return res.status(404).json({success:false,message:"Message not found"}); res.json({success:true,message:"Message deleted",data}); }catch(e){next(e)}
});
export default router;
