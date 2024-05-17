import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Shareholder Infos
export const getShareholderInfos = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const shareholderInfos = await prisma.shareholderInfo.findMany();

    res.status(200).json(shareholderInfos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Shareholder Infos!", error });
  }
};

// Get a Shareholder Info
export const getShareholderInfo = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const shareholderInfo = await prisma.shareholderInfo.findUnique({
      where: { rowId },
    });

    res.status(200).json(shareholderInfo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Shareholder Info!", error });
  }
};

// Create a Shareholder Info
export const createShareholderInfo = async (req, res) => {
  const {
    bankCode,
    reportingDate,
    shareholderSequence,
    name,
    gender,
    type,
    registrationDate,
    nationality,
    residence,
    idNumber,
    address,
    phoneNumber,
    majorPromoter,
    subscribedShares,
    shareValue,
    shareholdingAmount,
    paidUpShares,
    percentageOfShare,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!11" });

    const newShareholderInfo = await prisma.shareholderInfo.create({
      data: {
        bankCode,
        reportingDate,
        shareholderSequence,
        name,
        gender,
        type,
        registrationDate,
        nationality,
        residence,
        idNumber,
        address,
        phoneNumber,
        majorPromoter,
        subscribedShares: parseFloat(subscribedShares),
        shareValue: parseFloat(shareValue),
        shareholdingAmount: parseFloat(shareholdingAmount),
        paidUpShares: parseFloat(paidUpShares),
        percentageOfShare: parseFloat(percentageOfShare),
      },
    });

    res.status(201).json(newShareholderInfo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create a Shareholder Info!",
      error,
    });
  }
};

// Update a Shareholder Info
export const updateShareholderInfo = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    bankCode,
    reportingDate,
    shareholderSequence,
    name,
    gender,
    type,
    registrationDate,
    nationality,
    residence,
    idNumber,
    address,
    phoneNumber,
    majorPromoter,
    subscribedShares,
    shareValue,
    shareholdingAmount,
    paidUpShares,
    percentageOfShare,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedShareholderInfo = await prisma.shareholderInfo.update({
      where: { rowId },
      data: {
        bankCode,
        reportingDate,
        shareholderSequence,
        name,
        gender,
        type,
        registrationDate,
        nationality,
        residence,
        idNumber,
        address,
        phoneNumber,
        majorPromoter,
        subscribedShares: parseFloat(subscribedShares),
        shareValue: parseFloat(shareValue),
        shareholdingAmount: parseFloat(shareholdingAmount),
        paidUpShares: parseFloat(paidUpShares),
        percentageOfShare: parseFloat(percentageOfShare),
      },
    });

    res.status(202).json(updatedShareholderInfo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update a Shareholder Info!",
      error,
    });
  }
};

// Delete a Shareholder Info
export const deleteShareholderInfo = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.shareholderInfo.delete({
      where: { rowId },
    });

    res.status(204).json({ message: "Shareholder Info deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Shareholder Info!", error });
  }
};
