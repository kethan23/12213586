import express from "express";
import averageRoute from "./routes/average";

const app = express();
app.use(express.json());

app.use("/average", averageRoute);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
