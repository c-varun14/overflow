import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createAdmin = async (req, res) => {
  try {
    // if (req.admin) {
    const password = bcrypt.hashSync(req.body.password, 10);
    const admin = await UserModel.create({ ...req.body, password });
    res.status(201).json({ ...admin, password: null });
    // }
    // else {
    //   res.status(401).json("You are not a admin");
    // }
  } catch (err) {
    res.json(err.message);
  }
};

export const createStudent = async (req, res) => {
  try {
    if (req.admin) {
      const password = bcrypt.hashSync(req.body.password, 10);
      const student = await UserModel.create({ ...req.body, password });
      res.status(201).json({ ...student, password: null });
    } else {
      res.status(401).json("You are not a admin");
    }
  } catch (err) {
    res.json(err.message);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    const verify = bcrypt.compareSync(password, user.password);
    if (verify) {
      const userToBeSent = { name: user.username, email, userId: user._id };
      const token = jwt.sign(userToBeSent, process.env.jwt_secret);
      res.cookie("accessToken", token).json({ ...userToBeSent });
    } else res.status(400).json("Wrong password");
  } else res.status(400).json("Enter a valid email");
};

export const verify = (req, res) => {
  const token = req.cookies.accessToken;
  if (token) {
    console.log("running");
    jwt.verify(token, process.env.jwt_secret, (err, payload) => {
      if (err) {
        return res
          .clearCookie("accessToken")
          .status(401)
          .send("You are not authenticated");
      }
      if (payload) {
        console.log(payload);
        return res.json(payload);
      }
    });
  } else return res.status(400).json("hello world");
};

export const signout = async (req, res) => {
  res.clearCookie("accessToken");
};
