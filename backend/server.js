import express from "express";
import dotenv from "dotenv";

import authRouts from "./routes/auth.routes.js";
import connectToMDB from "./db/connectToMDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRouts);

app.listen(PORT, () => {
  connectToMDB();
  console.log("Server running on port " + `${PORT}`);
});
