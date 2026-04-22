import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  loginUser,
  updateUser,
} from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/jwt.Auth.middleware.js";
import { isAdmin } from "../middleware/Auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/getallusers", getAllUsers);
userRouter.put("/update/:id", authMiddleware, isAdmin, updateUser);
userRouter.delete("/delete/:id", authMiddleware, isAdmin, deleteUser);
export default userRouter;
