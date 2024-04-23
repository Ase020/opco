import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Fraud Incidents
export const getFraudIncidents = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const fraudIncidents = await prisma.fraudIncident.findMany();

    res.status(200).json(fraudIncidents);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Fraud Incidents!", error });
  }
};

// Get a Fraud Incident
export const getFraudIncident = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const fraudIncident = await prisma.fraudIncident.findUnique({
      where: { rowId },
    });

    res.status(200).json(fraudIncident);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Fraud Incident!", error });
  }
};

// Create a Fraud Incident
export const createFraudIncident = async (req, res) => {
  const {
    pspId,
    reportingDate,
    subCountyCode,
    subFraudCode,
    fraudCategoryFlag,
    victimCategory,
    victimInfo,
    dateOfOccurence,
    numberOfIncidents,
    amountInvolved,
    amountLost,
    amountRecovered,
    actionTaken,
    recoveryDetails,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newFraudIncident = await prisma.fraudIncident.create({
      data: {
        pspId,
        reportingDate,
        subCountyCode,
        subFraudCode,
        fraudCategoryFlag,
        victimCategory,
        victimInfo,
        dateOfOccurence,
        numberOfIncidents: parseInt(numberOfIncidents),
        amountInvolved: parseFloat(amountInvolved),
        amountLost: parseFloat(amountLost),
        amountRecovered: parseFloat(amountRecovered),
        actionTaken,
        recoveryDetails,
      },
    });

    res.status(201).json(newFraudIncident);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create a Fraud Incident!", error });
  }
};

// Update a Fraud Incident
export const updateFraudIncident = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    reportingDate,
    subCountyCode,
    subFraudCode,
    fraudCategoryFlag,
    victimCategory,
    victimInfo,
    dateOfOccurence,
    numberOfIncidents,
    amountInvolved,
    amountLost,
    amountRecovered,
    actionTaken,
    recoveryDetails,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedFraudIncident = await prisma.fraudIncident.update({
      where: { rowId },
      data: {
        pspId,
        reportingDate,
        subCountyCode,
        subFraudCode,
        fraudCategoryFlag,
        victimCategory,
        victimInfo,
        dateOfOccurence,
        numberOfIncidents: parseInt(numberOfIncidents),
        amountInvolved: parseFloat(amountInvolved),
        amountLost: parseFloat(amountLost),
        amountRecovered: parseFloat(amountRecovered),
        actionTaken,
        recoveryDetails,
      },
    });

    res.status(202).json(updatedFraudIncident);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update a Fraud Incident!", error });
  }
};

// Delete a Fraud Incident
export const deleteFraudIncident = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.fraudIncident.delete({
      where: { rowId },
    });

    res.status(204).json({ message: "Fraud Incident deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Fraud Incident!", error });
  }
};
