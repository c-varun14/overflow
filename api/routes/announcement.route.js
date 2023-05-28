import express from "express";
import {
  getAnnouncements,
  createAnnouncement,
} from "../controllers/announcement.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const announcementRouter = express.Router();

announcementRouter.post("/createAnnouncement", verifyToken, createAnnouncement);

announcementRouter.get("/getAnnouncements", verifyToken, getAnnouncements);

export default announcementRouter;
