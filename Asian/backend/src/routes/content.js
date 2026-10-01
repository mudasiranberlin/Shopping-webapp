import { Router } from "express";
import SiteContent from "../models/SiteContent.js";
import { protect, adminOnly } from "../middleware/auth.js";
const router=Router();
router.get("/",async(req,res,next)=>{try{res.json({success:true,data:await SiteContent.find().sort({key:1})})}catch(e){next(e)}});
router.get("/:key",async(req,res,next)=>{try{const data=await SiteContent.findOne({key:req.params.key});if(!data)return res.status(404).json({success:false,message:"Content not found"});res.json({success:true,data})}catch(e){next(e)}});
router.put("/:key",protect,adminOnly,async(req,res,next)=>{try{const data=await SiteContent.findOneAndUpdate({key:req.params.key},{key:req.params.key,value:req.body.value},{upsert:true,new:true,runValidators:true});res.json({success:true,message:"Content saved",data})}catch(e){next(e)}});
router.delete("/:key",protect,adminOnly,async(req,res,next)=>{try{const data=await SiteContent.findOneAndDelete({key:req.params.key});if(!data)return res.status(404).json({success:false,message:"Content not found"});res.json({success:true,message:"Content deleted",data})}catch(e){next(e)}});
export default router;
