import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCooki from "../utils/generateToken.js";

export const singup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {

      generateTokenAndSetCooki(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "User not created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};



export const login = async (req, res) => {
 try{
    const { username, password } = req.body;
    const user = await User.findOne({ username});
    const passwordMatch = await bcrypt.compare(password, user?.password || "");

    if(!user || !passwordMatch){
      return res.status(400).json({ message: "Invalid username or password" });
    }
    generateTokenAndSetCooki(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
 } catch (error) {
   console.log(error);
   res.status(500).json({ message: error.message });
 }
};

export const logout = (req, res) => {
 try{
  res.cookie("jwt", "", {maxAge: 0})
  res.status(200).json({ message: "Logged out successfully" });
 }catch (error) {
   console.log(error);
   res.status(500).json({ message: error.message });
 }
};