import express from "express";
import dotenv from "dotenv";

import screeningRoutes from "./routes/screening.routes.js";
import prescriptionRoutes from "./routes/prescription.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/screening", screeningRoutes);
app.use("/api/prescription", prescriptionRoutes);

app.listen(process.env.PORT, () => {
  console.log(`AI Health Backend running on port ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING FINE");
});
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
});
