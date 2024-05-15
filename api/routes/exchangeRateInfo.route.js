import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  createExchangeRateInfo,
  deleteExchangeRateInfo,
  getExchangeRateInfo,
  getExchangeRateInfos,
  updateExchangeRateInfo,
} from "../controllers/exchangeRateInfo.controller.js";

const exchangeRateInfoRouter = express.Router();

exchangeRateInfoRouter.get("/", verifyToken, getExchangeRateInfos);
exchangeRateInfoRouter.get("/rowId", verifyToken, getExchangeRateInfo);
exchangeRateInfoRouter.post("/", verifyToken, createExchangeRateInfo);
exchangeRateInfoRouter.put("/rowId", verifyToken, updateExchangeRateInfo);
exchangeRateInfoRouter.get("/rowId", verifyToken, deleteExchangeRateInfo);

export default exchangeRateInfoRouter;
