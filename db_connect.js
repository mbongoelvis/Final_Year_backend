import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Database connection established");
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
};