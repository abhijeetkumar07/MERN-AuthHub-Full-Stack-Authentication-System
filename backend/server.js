
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.set("trust proxy", 1);
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
}));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 120,
  standardHeaders: "draft-7",
  legacyHeaders: false,
}));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "AuthVerse API" });
});

app.use("/api/auth", authRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`AuthVerse API running on port ${PORT}`));
