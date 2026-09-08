const mongoose = require("mongoose");
const dns = require("dns");

// Pakai DNS Google secara eksplisit untuk bypass blokir ISP
dns.setServers(["8.8.8.8", "8.8.4.4"]);
async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined in .env file");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;