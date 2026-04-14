// routes/user.routes.js
import express from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", createUser);
router.get("/allusers", getAllUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
export default router;
