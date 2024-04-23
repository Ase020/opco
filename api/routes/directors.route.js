import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  createDirector,
  deleteDirector,
  getDirector,
  getDirectors,
  updateDirector,
} from "../controllers/directors.controller.js";

const directorsRouter = express.Router();

directorsRouter.get("/", verifyToken, getDirectors);
directorsRouter.get("/:rowId", verifyToken, getDirector);
directorsRouter.post("/", verifyToken, createDirector);
directorsRouter.patch("/:rowId", verifyToken, updateDirector);
directorsRouter.delete("/:rowId", verifyToken, deleteDirector);

export default directorsRouter;
