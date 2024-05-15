import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  createShareholderInfo,
  deleteShareholderInfo,
  getShareholderInfo,
  getShareholderInfos,
  updateShareholderInfo,
} from "../controllers/shareholderInfo.controller.js";

const shareholderInfoRouter = express.Router();

shareholderInfoRouter.get("/", verifyToken, getShareholderInfos);
shareholderInfoRouter.get("/:rowId", verifyToken, getShareholderInfo);
shareholderInfoRouter.post("/", verifyToken, createShareholderInfo);
shareholderInfoRouter.put("/:rowId", verifyToken, updateShareholderInfo);
shareholderInfoRouter.delete("/:rowId", verifyToken, deleteShareholderInfo);

export default shareholderInfoRouter;
