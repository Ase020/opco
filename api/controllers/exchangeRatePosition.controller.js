import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Foreign Exchange Positions
export const getForeignExchangePositions = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const foreignExchangePositions =
      await prisma.foreignExchangePosition.findMany();

    res.status(200).json(foreignExchangePositions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Foreign Exchange Positions!", error });
  }
};

// Get a Foreign Exchange Position
export const getForeignExchangePosition = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const foreignExchangePosition =
      await prisma.foreignExchangePosition.findUnique({
        where: { rowId },
      });

    res.status(200).json(foreignExchangePosition);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Foreign Exchange Position!", error });
  }
};

// Create a Foreign Exchange Position
export const createForeignExchangePosition = async (req, res) => {
  const {
    institutionCode,
    reportingDate,
    currencyCode,
    kesSpotRate,
    openingPositionAmount,
    totalInflowsAmount,
    otherTotalInflowsAmount,
    totalOutflowsAmount,
    otherTotalOutflowsAmount,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newForeignExchangePosition =
      await prisma.foreignExchangePosition.create({
        data: {
          institutionCode,
          reportingDate,
          currencyCode,
          kesSpotRate: parseFloat(kesSpotRate),
          openingPositionAmount: parseFloat(openingPositionAmount),
          totalInflowsAmount: parseFloat(totalInflowsAmount),
          otherTotalInflowsAmount: parseFloat(otherTotalInflowsAmount),
          totalOutflowsAmount: parseFloat(totalOutflowsAmount),
          otherTotalOutflowsAmount: parseFloat(otherTotalOutflowsAmount),
        },
      });

    res.status(201).json(newForeignExchangePosition);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create a Foreign Exchange Position!",
      error,
    });
  }
};

// Update a Foreign Exchange Position
export const updateForeignExchangePosition = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    institutionCode,
    reportingDate,
    currencyCode,
    kesSpotRate,
    openingPositionAmount,
    totalInflowsAmount,
    otherTotalInflowsAmount,
    totalOutflowsAmount,
    otherTotalOutflowsAmount,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedForeignExchangePosition =
      await prisma.foreignExchangePosition.update({
        where: { rowId },
        data: {
          institutionCode,
          reportingDate,
          currencyCode,
          kesSpotRate: parseFloat(kesSpotRate),
          openingPositionAmount: parseFloat(openingPositionAmount),
          totalInflowsAmount: parseFloat(totalInflowsAmount),
          otherTotalInflowsAmount: parseFloat(otherTotalInflowsAmount),
          totalOutflowsAmount: parseFloat(totalOutflowsAmount),
          otherTotalOutflowsAmount: parseFloat(otherTotalOutflowsAmount),
        },
      });

    res.status(202).json(updatedForeignExchangePosition);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update a Foreign Exchange Position!",
      error,
    });
  }
};

// Delete a Foreign Exchange Position
export const deleteForeignExchangePosition = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.foreignExchangePosition.delete({
      where: { rowId },
    });

    res
      .status(204)
      .json({ message: "Foreign Exchange Position deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Foreign Exchange Position!", error });
  }
};
