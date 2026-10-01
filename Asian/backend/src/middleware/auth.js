import jwt from "jsonwebtoken";
import User from "../models/User.js";
export async function protect(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    if (!header.startsWith("Bearer ")) return res.status(401).json({ success:false, message:"Authentication required" });
    const token = header.slice(7);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select("-password");
    if (!user) return res.status(401).json({ success:false, message:"User no longer exists" });
    req.user = user;
    next();
  } catch { res.status(401).json({ success:false, message:"Invalid or expired token" }); }
}
export function adminOnly(req,res,next) {
  if (req.user?.role !== "admin") return res.status(403).json({ success:false, message:"Administrator access required" });
  next();
}
