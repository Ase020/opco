import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";

const directorManagementRouter = express.Router();

export default directorManagementRouter;
