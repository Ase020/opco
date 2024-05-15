import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";

const financialPositionRouter = express.Router();

export default financialPositionRouter;
