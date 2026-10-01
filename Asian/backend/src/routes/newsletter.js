import { Router } from "express";
import NewsletterSubscriber from "../models/NewsletterSubscriber.js";
import { protect, adminOnly } from "../middleware/auth.js";
const router=Router();
router.post("/",async(req,res,next)=>{
 try { const email=String(req.body.email||"").trim().toLowerCase(); if(!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({success:false,message:"Please provide a valid email"}); const data=await NewsletterSubscriber.create({email}); res.status(201).json({success:true,message:"Subscribed successfully",data}); } catch(e){next(e)}
});
router.get("/",protect,adminOnly,async(req,res,next)=>{try{res.json({success:true,data:await NewsletterSubscriber.find().sort({createdAt:-1})})}catch(e){next(e)}});
router.delete("/:id",protect,adminOnly,async(req,res,next)=>{try{const data=await NewsletterSubscriber.findByIdAndDelete(req.params.id);if(!data)return res.status(404).json({success:false,message:"Subscriber not found"});res.json({success:true,message:"Subscriber deleted",data})}catch(e){next(e)}});
export default router;
