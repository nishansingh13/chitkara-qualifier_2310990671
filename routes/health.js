import express from "express";
import { healthController, EMAIL } from "../controllers/healthController.js";

const healthRouter = express.Router();

healthRouter.get("/", healthController.getHealth);

healthRouter.all("/", (req, res) => {
  res.status(405).json({
    is_success: false,
    official_email: EMAIL,
    error: `Method ${req.method} not allowed for /health endpoint. Use GET.`
  });
});

export { healthRouter };
