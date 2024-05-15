import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  createFinancialPosition,
  deleteFinancialPosition,
  getFinancialPosition,
  getFinancialPositions,
  updateFinancialPosition,
} from "../controllers/financialPosition.controller.js";

const financialPositionRouter = express.Router();

financialPositionRouter.get("/", verifyToken, getFinancialPositions);
financialPositionRouter.get("/:rowId", verifyToken, getFinancialPosition);
financialPositionRouter.post("/", verifyToken, createFinancialPosition);
financialPositionRouter.put("/:rowId", verifyToken, updateFinancialPosition);
financialPositionRouter.delete("/:rowId", verifyToken, deleteFinancialPosition);

export default financialPositionRouter;
