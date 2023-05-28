import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import {
  getStudent,
  getStudents,
  getAdmins,
} from "../controllers/students.controller.js";

const studentsRouter = express.Router();

studentsRouter.get("/admins", verifyToken, getAdmins);

studentsRouter.get("/getStudent", verifyToken, getStudent);

studentsRouter.get("/getStudents", verifyToken, getStudents);

export default studentsRouter;
