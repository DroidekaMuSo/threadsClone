import mongoose from "mongoose";
import { MONGO_URL } from "../config/constants.js";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(
      "🚀 ~ file: connectDB.js:6 ~ connectDB ~ error:",
      error.message
    );
    process.exit(1);
  }
};

export default connectDB;
