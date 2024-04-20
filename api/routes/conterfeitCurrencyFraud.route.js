import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  getCounterfeitCurrencyFrauds,
  getCounterfeitCurrencyFraud,
  createCounterfeitCurrencyFraud,
  updateCounterfeitCurrencyFraud,
  deleteCounterfeitCurrencyFraud,
} from "../controllers/counterfeitCurrencyFraud.controller.js";

const conterfeitCurrencyFraudRouter = express.Router();

conterfeitCurrencyFraudRouter.get(
  "/",
  verifyToken,
  getCounterfeitCurrencyFrauds
);
conterfeitCurrencyFraudRouter.get(
  "/:rowId",
  verifyToken,
  getCounterfeitCurrencyFraud
);
conterfeitCurrencyFraudRouter.post(
  "/",
  verifyToken,
  createCounterfeitCurrencyFraud
);
conterfeitCurrencyFraudRouter.put(
  "/:rowId",
  verifyToken,
  updateCounterfeitCurrencyFraud
);
conterfeitCurrencyFraudRouter.delete(
  "/:rowId",
  verifyToken,
  deleteCounterfeitCurrencyFraud
);

export default conterfeitCurrencyFraudRouter;
