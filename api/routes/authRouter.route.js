import {
  createAdmin,
  createStudent,
  signin,
  signout,
  verify,
} from "../controllers/auth.controller.js";
import express from "express";
import verifyToken from "../middlewares/verifyToken.js";

const authRouter = express.Router();

authRouter.post("/createStudent", verifyToken, createStudent);
authRouter.post("/createAdmin", verifyToken, createAdmin);
authRouter.post("/signin", verifyToken, signin);
authRouter.post("/signout", signout);
authRouter.post("/verify", verify);

export default authRouter;
