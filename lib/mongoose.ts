// lib/mongoose.ts
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI as string;

if (!MONGO_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cachedClient: mongoose.Mongoose | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = await mongoose.connect(MONGO_URI);

  return cachedClient;
}

export default connectToDatabase;
