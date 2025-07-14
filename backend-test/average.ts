import express from "express";
import { log } from "../utils/logger";

const router = express.Router();

router.post("/", async (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers)) {
    await log("backend", "warn", "handler", "Invalid input: numbers should be array");
    return res.status(400).json({ error: "Invalid input" });
  }

  const avg = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

  await log("backend", "info", "handler", `Average calculated: ${avg}`);

  res.json({ average: avg });
});

export default router;
