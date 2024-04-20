import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Trust Account Details
export const getTrustAccPlacements = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const trustAccPlacements = await prisma.trustAccPlacement.findMany();

    res.status(200).json(trustAccPlacements);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Trust Accounts!", error });
  }
};

// Get a Trust Account Detail
export const getTrustAccPlacement = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const trustAccPlacement = await prisma.trustAccPlacement.findUnique({
      where: { rowId },
    });

    res.status(200).json(trustAccPlacement);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Trust Account Placement!" });
  }
};

// Create a Trust Account Detail
export const createTrustAccPlacement = async (req, res) => {
  const {
    pspId,
    reportingDate,
    trustFundPlacement,
    trustFundInvMaturityDate,
    catTrustFundInvestedAmt,
    interestAmtPerCat,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newTrustAccPlacement = await prisma.trustAccPlacement.create({
      data: {
        pspId,
        reportingDate,
        trustFundPlacement,
        trustFundInvMaturityDate,
        catTrustFundInvestedAmt: parseFloat(catTrustFundInvestedAmt),
        interestAmtPerCat: parseFloat(interestAmtPerCat),
      },
    });

    res.status(201).json(newTrustAccPlacement);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create a Trust Account Placement!" });
  }
};

// Update a Trust Account Detail
export const updateTrustAccPlacement = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    reportingDate,
    trustFundPlacement,
    trustFundInvMaturityDate,
    catTrustFundInvestedAmt,
    interestAmtPerCat,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedTrustAccPlacement = await prisma.trustAccPlacement.update({
      where: { rowId },
      data: {
        pspId,
        reportingDate,
        trustFundPlacement,
        trustFundInvMaturityDate,
        catTrustFundInvestedAmt: parseFloat(catTrustFundInvestedAmt),
        interestAmtPerCat: parseFloat(interestAmtPerCat),
      },
    });

    res.status(202).json(updatedTrustAccPlacement);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update a Trust Account Placement!" });
  }
};

// Delete a Trust Account Detail
export const deleteTrustAccPlacement = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.trustAccPlacement.delete({
      where: { rowId },
    });

    res
      .status(204)
      .json({ message: "Trust account placement deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete trust account placement!" });
  }
};
