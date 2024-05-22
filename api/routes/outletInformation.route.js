import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  getOutletInfos,
  getOutletInfo,
  createOutletInfo,
  updateOutletInfo,
  deleteOutletInfo,
} from "../controllers/outletInformation.controller.js";

const outletInformationRouter = express.Router();

outletInformationRouter.get("/", verifyToken, getOutletInfos);
outletInformationRouter.get("/:rowId", verifyToken, getOutletInfo);
outletInformationRouter.post("/", verifyToken, createOutletInfo);
outletInformationRouter.put("/:rowId", verifyToken, updateOutletInfo);
outletInformationRouter.delete("/:rowId", verifyToken, deleteOutletInfo);

export default outletInformationRouter;
