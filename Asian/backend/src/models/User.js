import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true, maxlength: 100 },
  email: { type: String, trim: true, lowercase: true, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestamps: true });
export default mongoose.model("User", userSchema);
