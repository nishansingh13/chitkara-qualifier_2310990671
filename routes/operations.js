import express from "express";
import { operationsController } from "../controllers/operationsController.js";

const operationsRouter = express.Router();

operationsRouter.post("/", operationsController.processBfhl);

export { operationsRouter };
