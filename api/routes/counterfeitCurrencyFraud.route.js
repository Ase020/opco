import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  getCounterfeitCurrencyFrauds,
  getCounterfeitCurrencyFraud,
  createCounterfeitCurrencyFraud,
  updateCounterfeitCurrencyFraud,
  deleteCounterfeitCurrencyFraud,
} from "../controllers/counterfeitCurrencyFraud.controller.js";

const counterfeitCurrencyFraudRouter = express.Router();

counterfeitCurrencyFraudRouter.get(
  "/",
  verifyToken,
  getCounterfeitCurrencyFrauds
);
counterfeitCurrencyFraudRouter.get(
  "/:rowId",
  verifyToken,
  getCounterfeitCurrencyFraud
);
counterfeitCurrencyFraudRouter.post(
  "/",
  verifyToken,
  createCounterfeitCurrencyFraud
);
counterfeitCurrencyFraudRouter.put(
  "/:rowId",
  verifyToken,
  updateCounterfeitCurrencyFraud
);
counterfeitCurrencyFraudRouter.delete(
  "/:rowId",
  verifyToken,
  deleteCounterfeitCurrencyFraud
);

export default counterfeitCurrencyFraudRouter;
