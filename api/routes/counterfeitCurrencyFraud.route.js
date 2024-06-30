import express from "express";
import multer from "multer";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  getCounterfeitCurrencyFrauds,
  getCounterfeitCurrencyFraud,
  createCounterfeitCurrencyFraud,
  updateCounterfeitCurrencyFraud,
  deleteCounterfeitCurrencyFraud,
  createCounterfeitCurrencyFraudFromCSV,
} from "../controllers/counterfeitCurrencyFraud.controller.js";

const counterfeitCurrencyFraudRouter = express.Router();
const upload = multer({ dest: "uploads/" });

counterfeitCurrencyFraudRouter.post(
  "/upload-csv",
  upload.single("file"),
  createCounterfeitCurrencyFraudFromCSV
);

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
