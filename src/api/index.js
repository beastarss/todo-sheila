require("dotenv").config();
const app = require("../app");
const connectDB = require("../config/db");

// Hubungkan ke MongoDB
connectDB();

// Export aplikasi Express sebagai Vercel Serverless Function
module.exports = app;
