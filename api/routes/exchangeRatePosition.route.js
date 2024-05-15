import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";

const exchangeRatePositionRouter = express.Router();

export default exchangeRatePositionRouter;
