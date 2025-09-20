import { Router } from "express";
import fs from "fs/promises";
import path from "path";

const router = Router();

// GET /logs
router.get("/logs", async (req, res) => {
  try {
    const filePath = path.resolve("logs.txt"); // path to your txt file
    const data = await fs.readFile(filePath, "utf-8");
    res.type("text/plain"); // so browser displays as plain text
    res.send(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      res.status(404).send("File not found");
    } else {
      res.status(500).send("Error reading file");
    }
  }
});

export default router;
