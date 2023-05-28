import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: {
      type: String,
      enums: [
        "president",
        "staff",
        "principal",
        "dean",
        "student",
        "officeStaff",
      ],
      required: true,
      default: "student",
    },
    deparment: {
      type: String,
      required: function () {
        if (this.role === "student") {
          return true;
        } else return null;
      },
      enums: ["cse", "robotics", "ai"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", UserSchema);
