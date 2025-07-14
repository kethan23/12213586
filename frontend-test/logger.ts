// src/utils/logger.ts
import axios from "axios";

const LOGGING_ENDPOINT = "http://20.244.56.144/evaluation-service/log";
const ACCESS_TOKEN = "YOUR_JWT_TOKEN"; // Replace with your actual JWT token from auth step

export async function log(
  stack: "frontend",
  level: "info" | "warn" | "fatal",
  pkg: "component" | "hook" | "page" | "state" | "style" | "middleware" | "config",
  message: string
) {
  try {
    const res = await axios.post(
      LOGGING_ENDPOINT,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    console.log("Log Sent:", res.data);
  } catch (error) {
    console.error("Failed to log:", error);
  }
}
