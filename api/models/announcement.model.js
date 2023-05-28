import mongoose from "mongoose";

const AnnouncementSchema = mongoose.Schema(
  {
    createdBy: {
      type: String,
      required: true,
    },
    for: {
      type: String,
      required: true,
      enums: ["all", "cse", "ai","robotics"],
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enums: ["admin", "dean", "principal"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Announcement", AnnouncementSchema);
