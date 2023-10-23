import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import displayRoutes from "express-router"

import connectDB from "./db/connectDB.js";

import userRoutes from "./routes/user.routes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); //To parse form data in the req.body
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT http://localhost:${PORT}`);
  // displayRoutes(app);
});
