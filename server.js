import dotenv from "dotenv";
dotenv.config();
const EMAIL = "nishan0671.be23@chitkara.edu.in";
import express from "express";
import { healthRouter } from "./routes/health.js";
import { operationsRouter } from "./routes/operations.js";
const app = express();
app.use(express.json());
app.use("/health", healthRouter);
app.use("/bfhl", operationsRouter);
app.use((req, res) => {
  res.status(404).json({
    is_success: false,
    official_email: EMAIL,
    error: "Endpoint not found"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
