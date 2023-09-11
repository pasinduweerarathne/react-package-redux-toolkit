import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    httpOnlt: true,
    secure: process.env.NODE_ENV === "development",
    sameSite: "strict",
    maxAge: 24 * 30 * 30 * 1000,
  });
};

export default generateToken;
