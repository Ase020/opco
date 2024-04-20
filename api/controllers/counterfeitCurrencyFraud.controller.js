import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Counterfeit Currency Frauds
export const getCounterfeitCurrencyFrauds = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const counterfeitCurrencyFrauds =
      await prisma.counterfeitCurrencyFraud.findMany();

    res.status(200).json(counterfeitCurrencyFrauds);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Counterfeit Currency Frauds!", error });
  }
};

// Get a Counterfeit Currency Fraud
export const getCounterfeitCurrencyFraud = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const counterfeitCurrencyFraud =
      await prisma.counterfeitCurrencyFraud.findUnique({
        where: { rowId },
      });

    res.status(200).json(counterfeitCurrencyFraud);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Counterfeit Currency Fraud!", error });
  }
};

// Create a Counterfeit Currency Fraud
export const createCounterfeitCurrencyFraud = async (req, res) => {
  const {
    pspId,
    reportingDate,
    subCountyCode,
    agentId,
    denominationCode,
    serialNumber,
    depositorsName,
    tellersName,
    dateConfiscated,
    dateSubmittedToCBK,
    remarks,
    numberOfPieces,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newCounterfeitCurrencyFraud =
      await prisma.counterfeitCurrencyFraud.create({
        data: {
          pspId,
          reportingDate,
          subCountyCode,
          agentId,
          denominationCode,
          serialNumber,
          depositorsName,
          tellersName,
          dateConfiscated,
          dateSubmittedToCBK,
          remarks,
          numberOfPieces: parseInt(numberOfPieces),
        },
      });

    res.status(201).json(newCounterfeitCurrencyFraud);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create a Counterfeit Currency Fraud!",
      error,
    });
  }
};

// Update a Counterfeit Currency Fraud
export const updateCounterfeitCurrencyFraud = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    reportingDate,
    subCountyCode,
    agentId,
    denominationCode,
    serialNumber,
    depositorsName,
    tellersName,
    dateConfiscated,
    dateSubmittedToCBK,
    remarks,
    numberOfPieces,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedcounterfeitCurrencyFraud =
      await prisma.counterfeitCurrencyFraud.update({
        where: { rowId },
        data: {
          pspId,
          reportingDate,
          subCountyCode,
          agentId,
          denominationCode,
          serialNumber,
          depositorsName,
          tellersName,
          dateConfiscated,
          dateSubmittedToCBK,
          remarks,
          numberOfPieces: parseInt(numberOfPieces),
        },
      });

    res.status(202).json(updatedcounterfeitCurrencyFraud);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to update a Counterfeit Currency Fraud!",
        error,
      });
  }
};

// Delete a Counterfeit Currency Fraud
export const deleteCounterfeitCurrencyFraud = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.counterfeitCurrencyFraud.delete({
      where: { rowId },
    });

    res
      .status(204)
      .json({ message: "Counterfeit Currency Fraud deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Counterfeit Currency Fraud!", error });
  }
};