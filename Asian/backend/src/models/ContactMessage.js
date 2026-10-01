import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, required: true, trim: true, maxlength: 200 },
  phone: { type: String, trim: true, maxlength: 40 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  status: { type: String, enum: ["new", "read", "replied"], default: "new" }
}, { timestamps: true });
export default mongoose.model("ContactMessage", schema);
