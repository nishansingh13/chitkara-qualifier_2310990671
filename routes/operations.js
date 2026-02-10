import express from "express";
import { operationsController } from "../controllers/operationsController.js";
import { EMAIL } from "../controllers/healthController.js";

const operationsRouter = express.Router();

operationsRouter.post("/", operationsController.processBfhl);
operationsRouter.all("/", (req, res) => {
  res.status(405).json({
    is_success: false,
    official_email: EMAIL,
    error: `Method ${req.method} not allowed for /bfhl endpoint. Use POST.`
  });
});

export { operationsRouter };
