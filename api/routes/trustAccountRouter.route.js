import express from "express";

import { getTrustAccounts } from "../controllers/trustAccounts.controller.js";

const trustAccountRouter = express.Router();

trustAccountRouter.get("/", getTrustAccounts);

export default trustAccountRouter;
