import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  createTrustee,
  deleteTrustee,
  getTrustee,
  getTrustees,
  updateTrustee,
} from "../controllers/trustees.controller.js";

const trusteesRouter = express.Router();

trusteesRouter.get("/", verifyToken, getTrustees);
trusteesRouter.get("/:rowId", verifyToken, getTrustee);
trusteesRouter.post("/", verifyToken, createTrustee);
trusteesRouter.put("/:rowId", verifyToken, updateTrustee);
trusteesRouter.delete("/:rowId", verifyToken, deleteTrustee);

export default trusteesRouter;
