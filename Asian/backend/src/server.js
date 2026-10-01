import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import newsletterRoutes from "./routes/newsletter.js";
import adminRoutes from "./routes/admin.js";
import contentRoutes from "./routes/content.js";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import { notFound, errorHandler } from "./middleware/error.js";

const app=express();
const allowed=(process.env.CORS_ORIGIN||"http://localhost:5173").split(",").map(v=>v.trim());
app.use(cors({origin:(origin,cb)=>!origin||allowed.includes("*")||allowed.includes(origin)?cb(null,true):cb(new Error("CORS origin not allowed")),credentials:true}));
app.use(express.json({limit:"1mb"}));
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
app.get("/api/health",(req,res)=>res.json({success:true,message:"AIC API is running"}));
app.use("/api/auth",authRoutes);
app.use("/api/contact",contactRoutes);
app.use("/api/newsletter",newsletterRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/content",contentRoutes);
app.use(notFound);
app.use(errorHandler);

async function ensureAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) return;
  const existing = await User.findOne({ email });
  if (!existing) {
    await User.create({ name: "AIC Administrator", email, password: await bcrypt.hash(password, 12), role: "admin" });
    console.log(`Admin account created for ${email}`);
  } else if (existing.role !== "admin") {
    existing.role = "admin";
    await existing.save();
  }
}
const port=Number(process.env.PORT||5000);
connectDB().then(async()=>{ await ensureAdmin(); app.listen(port,()=>console.log(`AIC backend listening on http://localhost:${port}`)); }).catch(err=>{console.error("Database connection failed:",err.message);process.exit(1)});
