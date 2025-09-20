import homeRouter from "./routes/home.js";
import express from "express";
import logsRouter from "./routes/logs.js";
import calculateRouter from "./routes/calculator.js";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRouter);
app.use("/", logsRouter);
app.use("/", calculateRouter);

// Simple 404 handler
app.use((req, res) => {
  res.status(404).send("<h2>404 Not Found</h2><a href='/'>Go Home</a>");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("<h2>500 Internal Server Error</h2><a href='/'>Go Home</a>");
});

export default app;
