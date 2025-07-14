import axios from "axios";

const LOGGING_ENDPOINT = "http://20.244.56.144/evaluation-service/log";
const ACCESS_TOKEN = "YOUR_JWT_TOKEN"; // Replace with your real token

export async function log(
  stack: "backend",
  level: "info" | "warn" | "fatal",
  pkg: "cache" | "controller" | "cron_job" | "db" | "domain" | "handler" | "repository" | "route" | "service" | "middleware" | "config",
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
  } catch (err: any) {  // ⬅️ Fix is here
    console.error("Log error:", err.message);
  }
}

