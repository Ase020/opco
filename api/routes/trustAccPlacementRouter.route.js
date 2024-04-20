import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  createTrustAccPlacement,
  deleteTrustAccPlacement,
  getTrustAccPlacement,
  getTrustAccPlacements,
  updateTrustAccPlacement,
} from "../controllers/trustAccPlacements.controller.js";

const trustAccPlacementRouter = express.Router();

trustAccPlacementRouter.get("/", verifyToken, getTrustAccPlacements);
trustAccPlacementRouter.get("/:rowId", verifyToken, getTrustAccPlacement);
trustAccPlacementRouter.post("/", verifyToken, createTrustAccPlacement);
trustAccPlacementRouter.put("/:rowId", verifyToken, updateTrustAccPlacement);
trustAccPlacementRouter.delete("/:rowId", verifyToken, deleteTrustAccPlacement);

export default trustAccPlacementRouter;
