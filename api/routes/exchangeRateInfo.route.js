import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";

const exchangeRateInfoRouter = express.Router();

export default exchangeRateInfoRouter;
