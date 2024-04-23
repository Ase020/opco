import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  createCybersecurityIncident,
  deleteCybersecurityIncident,
  getCybersecurityIncident,
  getCybersecurityIncidents,
  updateCybersecurityIncident,
} from "../controllers/cybersecurityIncidents.controller.js";

const cybersecurityIncidentRouter = express.Router();

cybersecurityIncidentRouter.get("/", verifyToken, getCybersecurityIncidents);
cybersecurityIncidentRouter.get(
  "/:rowId",
  verifyToken,
  getCybersecurityIncident
);
cybersecurityIncidentRouter.post("/", verifyToken, createCybersecurityIncident);
cybersecurityIncidentRouter.put(
  "/:rowId",
  verifyToken,
  updateCybersecurityIncident
);
cybersecurityIncidentRouter.delete(
  "/:rowId",
  verifyToken,
  deleteCybersecurityIncident
);

export default cybersecurityIncidentRouter;
