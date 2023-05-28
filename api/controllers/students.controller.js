import userModel from "../models/user.model.js";

export const getStudent = async (req, res) => {
  try {
    const student = await userModel.findOne({ email: req.body.email });
    res.json({ ...student, password: null });
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getStudents = async (req, res) => {
  try {
    // var emails = [];
    // userModel.find({ subscribed: true }, function (err, users) {
    //   console.log(users);
    //   if (err) {
    //     console.log(err);
    //   }
    // });
    const students = await userModel.find({ role: "student" });
    const data = students.map((student) => {
      return { ...student._doc, password: null };
    });
    res.json(data);
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAdmins = async (req, res) => {
  const admins1 = await userModel.find({
    role: "president",
  });
  const admins2 = await userModel.find({
    role: "staff",
  });
  const admins3 = await userModel.find({
    role: "principal",
  });
  const admins4 = await userModel.find({
    role: "dean",
  });
  const admins5 = await userModel.find({
    role: "officeStaff",
  });
  const admins = admins1 + admins2 + admins3 + admins4 + admins5;
  console.log(admins);
  const data = admins.map((admin) => {
    return { ...admin._doc, password: null };
  });
  res.json(data);
};
