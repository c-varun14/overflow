import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.route.js";
import announcementRouter from "./routes/announcement.route.js";
import studentsRouter from "./routes/students.route.js";
import userModel from "./models/user.model.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  })
);
dotenv.config();

app.use("/auth/", authRouter);
app.use("/", announcementRouter);
app.use("/", studentsRouter);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.mongo_db);
    console.log("connected");
  } catch (err) {
    console.log(err.message);
  }
};

app.listen(8000, () => {
  dbConnect();
});
