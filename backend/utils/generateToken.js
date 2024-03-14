import jwt from "jsonwebtoken";

const generateTokenAndSetCooki = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    samSite: "strict",
    secure: process.env.NODE_ENV !== "developer" ,
  });
};

export default generateTokenAndSetCooki;
