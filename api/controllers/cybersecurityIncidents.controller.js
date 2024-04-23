import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Cybersecurity Incidents
export const getCybersecurityIncidents = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cyber" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const cybersecurityIncidents =
      await prisma.cybersecurityIncident.findMany();

    res.status(200).json(cybersecurityIncidents);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Cybersecurity Incidents!", error });
  }
};

// Get a Cybersecurity Incident
export const getCybersecurityIncident = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cyber" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const cybersecurityIncident = await prisma.cybersecurityIncident.findUnique(
      {
        where: { rowId },
      }
    );

    res.status(200).json(cybersecurityIncident);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Cybersecurity Incident!", error });
  }
};

// Create a Cybersecurity Incident
export const createCybersecurityIncident = async (req, res) => {
  const {
    pspId,
    reportingDate,
    incidentNumber,
    locationOfAttacker,
    incidentMode,
    datetimeOfIncident,
    lossType,
    detailsOfIncident,
    actionTakenToManageIncident,
    datetimeOfIncidentResolution,
    actionTakenToMitigateIncident,
    amountInvolved,
    amountLost,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cyber" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newCybersecurityIncident = await prisma.cybersecurityIncident.create({
      data: {
        pspId,
        reportingDate,
        incidentNumber,
        locationOfAttacker,
        incidentMode,
        datetimeOfIncident: `${datetimeOfIncident}:18.570+00:00`,
        lossType,
        detailsOfIncident,
        actionTakenToManageIncident,
        datetimeOfIncidentResolution: `${datetimeOfIncidentResolution}:18.570+00:00`,
        actionTakenToMitigateIncident,
        amountInvolved: parseFloat(amountInvolved),
        amountLost: parseFloat(amountLost),
      },
    });

    res.status(201).json(newCybersecurityIncident);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create a Cybersecurity Incident!", error });
  }
};

// Update a Cybersecurity Incident
export const updateCybersecurityIncident = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    reportingDate,
    incidentNumber,
    locationOfAttacker,
    incidentMode,
    datetimeOfIncident,
    lossType,
    detailsOfIncident,
    actionTakenToManageIncident,
    datetimeOfIncidentResolution,
    actionTakenToMitigateIncident,
    amountInvolved,
    amountLost,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cyber" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedCybersecurityIncident =
      await prisma.cybersecurityIncident.update({
        where: { rowId },
        data: {
          pspId,
          reportingDate,
          incidentNumber,
          locationOfAttacker,
          incidentMode,
          datetimeOfIncident: `${datetimeOfIncident}:18.570+00:00`,
          lossType,
          detailsOfIncident,
          actionTakenToManageIncident,
          datetimeOfIncidentResolution: `${datetimeOfIncidentResolution}:18.570+00:00`,
          actionTakenToMitigateIncident,
          amountInvolved: parseFloat(amountInvolved),
          amountLost: parseFloat(amountLost),
        },
      });

    res.status(202).json(updatedCybersecurityIncident);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update a Cybersecurity Incident!", error });
  }
};

// Delete a Cybersecurity Incident
export const deleteCybersecurityIncident = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cyber" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.cybersecurityIncident.delete({
      where: { rowId },
    });

    res
      .status(204)
      .json({ message: "Cybersecurity Incident deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Cybersecurity Incident!", error });
  }
};
