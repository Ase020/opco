import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  createForeignExchangePosition,
  deleteForeignExchangePosition,
  getForeignExchangePosition,
  getForeignExchangePositions,
  updateForeignExchangePosition,
} from "../controllers/exchangeRatePosition.controller.js";

const exchangeRatePositionRouter = express.Router();

exchangeRatePositionRouter.get("/", verifyToken, getForeignExchangePositions);
exchangeRatePositionRouter.get(
  "/rowId",
  verifyToken,
  getForeignExchangePosition
);
exchangeRatePositionRouter.post(
  "/",
  verifyToken,
  createForeignExchangePosition
);
exchangeRatePositionRouter.put(
  "/rowId",
  verifyToken,
  updateForeignExchangePosition
);
exchangeRatePositionRouter.get(
  "/rowId",
  verifyToken,
  deleteForeignExchangePosition
);

export default exchangeRatePositionRouter;
