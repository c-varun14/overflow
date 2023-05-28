import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (token) {
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
      if (payload.role !== "student" || payload.role !== "officeStaff") {
        req.admin = true;
        return next();
      }
    });
  } else {
    return next();
  }
};

export default verifyToken;
