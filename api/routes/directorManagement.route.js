import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  createDirectorManagement,
  deleteDirectorManagement,
  getDirectorManagement,
  getDirectorManagements,
  updateDirectorManagement,
} from "../controllers/directorManagement.controller.js";

const directorManagementRouter = express.Router();

directorManagementRouter.get("/", verifyToken, getDirectorManagements);
directorManagementRouter.get("/:rowId", verifyToken, getDirectorManagement);
directorManagementRouter.post("/", verifyToken, createDirectorManagement);
directorManagementRouter.put("/:rowId", verifyToken, updateDirectorManagement);
directorManagementRouter.delete(
  "/:rowId",
  verifyToken,
  deleteDirectorManagement
);

export default directorManagementRouter;
