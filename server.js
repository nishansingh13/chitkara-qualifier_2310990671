import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { healthRouter } from "./routes/health.js";
import { operationsRouter } from "./routes/operations.js";
const app = express();
app.use(express.json());
app.use("/health", healthRouter);
app.use("/bfhl", operationsRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
