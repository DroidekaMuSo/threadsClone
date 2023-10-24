import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import displayRoutes from "express-router";

import connectDB from "./db/connectDB.js";

import userRoutes from "./routes/user.routes.js";
import { PORT } from "./config/constants.js";

connectDB();
dotenv.config();

const app = express();

app.use(express.json()); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); //To parse form data in the req.body
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT http://localhost:${PORT}`);
});
