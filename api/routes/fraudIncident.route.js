import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  createFraudIncident,
  deleteFraudIncident,
  getFraudIncident,
  getFraudIncidents,
  updateFraudIncident,
} from "../controllers/fraudIncidents.controller.js";

const fraudIncidentRouter = express.Router();

fraudIncidentRouter.get("/", verifyToken, getFraudIncidents);
fraudIncidentRouter.get("/:rowId", verifyToken, getFraudIncident);
fraudIncidentRouter.post("/", verifyToken, createFraudIncident);
fraudIncidentRouter.put("/:rowId", verifyToken, updateFraudIncident);
fraudIncidentRouter.delete("/:rowId", verifyToken, deleteFraudIncident);

export default fraudIncidentRouter;
