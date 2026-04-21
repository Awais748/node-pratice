import express from "express";

import { createUser } from "../controller/user2.controller.js";

const router = express.Router();

router.post("/", createUser);

export default router;
