import express from "express";

import {
  createTrustAccount,
  deleteTrustAccount,
  getTrustAccounts,
  getTrustAccount,
  updateTrustAccount,
} from "../controllers/trustAccounts.controller.js";

const trustAccountRouter = express.Router();

trustAccountRouter.get("/", getTrustAccounts);
trustAccountRouter.get("/:rowId", getTrustAccount);
trustAccountRouter.post("/", createTrustAccount);
trustAccountRouter.put("/:rowId", updateTrustAccount);
trustAccountRouter.delete("/:rowId", deleteTrustAccount);

export default trustAccountRouter;
