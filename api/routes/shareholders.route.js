import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  createShareholder,
  deleteShareholder,
  getShareholder,
  getShareholders,
  updateShareholder,
} from "../controllers/shareholders.controller.js";

const shareholdersRouter = express.Router();

shareholdersRouter.get("/", verifyToken, getShareholders);
shareholdersRouter.get("/:rowId", verifyToken, getShareholder);
shareholdersRouter.post("/", verifyToken, createShareholder);
shareholdersRouter.put("/:rowId", verifyToken, updateShareholder);
shareholdersRouter.delete("/:rowId", verifyToken, deleteShareholder);

export default shareholdersRouter;
