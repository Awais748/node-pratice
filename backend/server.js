import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./Routes/user.routes.js";
import userRoutes2 from "./Routes/user2.routes.js";
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/user2", userRoutes2);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
