import mongoose from "mongoose";

const connectToMDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectToMDB;
