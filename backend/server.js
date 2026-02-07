import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

// ===== Routes =====
import authRoutes from "./routes/auth.js";
import fileRoutes from "./routes/files.js";
import dashboardRoutes from "./routes/dashboard.js";
import chartRoutes from "./routes/charts.js";

// ===== Fix __dirname (ES module) =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== Force dotenv load =====
dotenv.config({ path: "./.env" });

// ===== App init =====
const app = express();
const PORT = 2000;

// ===== Middleware =====
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL || '*'
    : "http://localhost:3000",
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ===== Routes =====
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/charts", chartRoutes);

// ===== Health Check =====
app.get("/api/health", (req, res) => {
  res.json({
    status: "Server running",
    time: new Date().toISOString()
  });
});

// ===== Error Handler =====
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong" });
});

// ===== MongoDB URI (DIRECT – NO ENV ISSUE) =====
const MONGO_URI =
  "mongodb+srv://anand22154060_db_user:4zYDMmbE92QZEGAp@anand01.9mdcm7x.mongodb.net/excel-analytics";

// ===== MongoDB Connect =====
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
