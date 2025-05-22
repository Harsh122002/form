import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (e) {
    console.error(`Error connecting to the database: ${e}`);
  }
};

export default connection;
