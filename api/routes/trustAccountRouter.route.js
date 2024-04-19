import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  createTrustAccount,
  deleteTrustAccount,
  getTrustAccounts,
  getTrustAccount,
  updateTrustAccount,
} from "../controllers/trustAccounts.controller.js";

const trustAccountRouter = express.Router();

trustAccountRouter.get("/", verifyToken, getTrustAccounts);
trustAccountRouter.get("/:rowId", verifyToken, getTrustAccount);
trustAccountRouter.post("/", verifyToken, createTrustAccount);
trustAccountRouter.put("/:rowId", verifyToken, updateTrustAccount);
trustAccountRouter.delete("/:rowId", verifyToken, deleteTrustAccount);

export default trustAccountRouter;
