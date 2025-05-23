import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const connection = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // Debug
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
            family: 4,

     
    });
    console.log(`MongoDB connected: `);
  } catch (e) {
    console.error(`Error connecting to the database: ${e}`);
  }
};

export default connection;
