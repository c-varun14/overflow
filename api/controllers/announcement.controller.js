import announcementModel from "../models/announcement.model.js";

export const createAnnouncement = async (req, res) => {
  try {
    const announcement = await announcementModel.create({ ...req.body });
    res.status(201).json("user created");
  } catch (err) {
    res.status(err.status).json(res.message);
  }
};

export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await announcementModel
      .find({})
      .sort({ createdAt: -1 });
    res.json(announcements);
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
