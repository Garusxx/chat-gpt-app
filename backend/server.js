import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMDB from "./db/connectToMDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();


const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMDB();
  console.log("Server running on port " + `${PORT}`);
});
