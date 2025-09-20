
import homeRouter from "./routes/home.js";
import express from "express";
import logsRouter from "./routes/logs.js";
const app = express();


// Routes
app.use("/", homeRouter);
app.use("/", logsRouter);

// Simple 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
