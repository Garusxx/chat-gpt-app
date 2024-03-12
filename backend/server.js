import express from "express";
import dotenv from "dotenv";
import authRouts from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!asd");
});

app.use("/api/auth", authRouts);

app.listen(PORT, () => console.log("Server running on port " + `${PORT}`));
