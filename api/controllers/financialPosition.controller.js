import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Financial position and Comprehensive Incomes
export const getFinancialPositions = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const financialPosition = await prisma.financialPosition.findMany();

    res.status(200).json(financialPosition);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Financial position and Comprehensive Incomes!",
      error,
    });
  }
};

// Get a Financial position and Comprehensive Income
export const getFinancialPosition = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const financialPosition = await prisma.financialPosition.findUnique({
      where: { rowId },
    });

    res.status(200).json(financialPosition);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Financial position and Comprehensive Income!",
      error,
    });
  }
};

// Create a Financial position and Comprehensive Income
export const createFinancialPosition = async (req, res) => {
  const {
    fxbCode,
    reportingDate,
    mappingCode,
    amount,
    numberOfEmployees,
    numberOfOutlets,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newFinancialPosition = await prisma.financialPosition.create({
      data: {
        fxbCode,
        reportingDate,
        mappingCode,
        amount: parseFloat(amount),
        numberOfEmployees: parseInt(numberOfEmployees),
        numberOfOutlets: parseInt(numberOfOutlets),
      },
    });

    res.status(201).json(newFinancialPosition);
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to create a Financial position and Comprehensive Income!",
      error,
    });
  }
};

// Update a Financial position and Comprehensive Income
export const updateFinancialPosition = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    fxbCode,
    reportingDate,
    mappingCode,
    amount,
    numberOfEmployees,
    numberOfOutlets,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedFinancialPosition = await prisma.financialPosition.update({
      where: { rowId },
      data: {
        fxbCode,
        reportingDate,
        mappingCode,
        amount: parseFloat(amount),
        numberOfEmployees: parseInt(numberOfEmployees),
        numberOfOutlets: parseInt(numberOfOutlets),
      },
    });

    res.status(202).json(updatedFinancialPosition);
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to update a Financial position and Comprehensive Income!",
      error,
    });
  }
};

// Delete a Financial position and Comprehensive Income
export const deleteFinancialPosition = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.financialPosition.delete({
      where: { rowId },
    });

    res.status(204).json({
      message:
        "Financial position and Comprehensive Income deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete Financial position and Comprehensive Income!",
      error,
    });
  }
};
