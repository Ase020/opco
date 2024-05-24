import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  createCustomerComplaint,
  deleteCustomerComplaint,
  getCustomerComplaint,
  getCustomerComplaints,
  updateCustomerComplaint,
} from "../controllers/customercomplaints.controller.js";

const scheduleOfCustomerComplaintRouter = express.Router();

scheduleOfCustomerComplaintRouter.get("/", verifyToken, getCustomerComplaints);
scheduleOfCustomerComplaintRouter.get(
  "/:rowId",
  verifyToken,
  getCustomerComplaint
);
scheduleOfCustomerComplaintRouter.post(
  "/",
  verifyToken,
  createCustomerComplaint
);
scheduleOfCustomerComplaintRouter.put(
  "/:rowId",
  verifyToken,
  updateCustomerComplaint
);
scheduleOfCustomerComplaintRouter.delete(
  "/:rowId",
  verifyToken,
  deleteCustomerComplaint
);

export default scheduleOfCustomerComplaintRouter;
