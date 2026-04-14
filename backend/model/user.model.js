import mongoose from "mongoose";
const userModel = new mongoose.Schema(
  {
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "manager"],
    },
  },
  { timestamps: true }
);
export default mongoose.model("usersss", userModel);
