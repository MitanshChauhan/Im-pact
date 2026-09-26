import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/im-pact';
    const conn = await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 8000,
    });
    console.log(`[MongoDB] ✅ Connected: ${conn.connection.host} / Database: ${conn.connection.name}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB Warning] Could not connect to MongoDB: ${error.message}`);
    console.warn(`[MongoDB Info] App is operating in Hybrid Mode (Express API active with fallback support).`);
    return false;
  }
};
