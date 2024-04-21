import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  createSeniorMgt,
  deleteSeniorMgt,
  getSeniorMgt,
  getSeniorMgts,
  updateSeniorMgt,
} from "../controllers/seniorMgt.controller.js";

const seniorMgtRouter = express.Router();

seniorMgtRouter.get("/", verifyToken, getSeniorMgts);
seniorMgtRouter.get("/:rowId", verifyToken, getSeniorMgt);
seniorMgtRouter.post("/", verifyToken, createSeniorMgt);
seniorMgtRouter.put("/:rowId", verifyToken, updateSeniorMgt);
seniorMgtRouter.delete("/:rowId", verifyToken, deleteSeniorMgt);

export default seniorMgtRouter;
