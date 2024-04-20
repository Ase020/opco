import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

// Get all Trust Account Details
export const getTrustAccounts = async (req, res) => {
  const token = req.cookies?.token;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const trustAccounts = await prisma.trustAcc.findMany();

    res.status(200).json(trustAccounts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Trust Accounts!", error });
  }
};

// Get a Trust Account Details
export const getTrustAccount = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const trustAccount = await prisma.trustAcc.findUnique({
      where: { rowId },
    });

    res.status(200).json(trustAccount);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Trust Account!", error });
  }
};

// Create a Trust Account Details
export const createTrustAccount = async (req, res) => {
  const {
    pspId,
    bankId,
    reportingDate,
    bankAccNumber,
    trustAccDrTypeCode,
    orgReceivingDonation,
    sectorCode = "",
    trustAccIntUtilizedDetails,
    openingBal,
    principalAmount,
    interestEarned,
    trustAccInterestUtilized,
  } = req.body;
  // const tokenUserId = req.userId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newTrustAcc = await prisma.trustAcc.create({
      data: {
        pspId,
        bankId,
        reportingDate,
        bankAccNumber,
        trustAccDrTypeCode,
        orgReceivingDonation,
        sectorCode,
        trustAccIntUtilizedDetails,
        openingBal: parseFloat(openingBal),
        principalAmount: parseFloat(principalAmount),
        interestEarned: parseFloat(interestEarned),
        closingBal: parseFloat(principalAmount) + parseFloat(interestEarned),
        trustAccInterestUtilized: parseFloat(trustAccInterestUtilized),
      },
    });

    res.status(201).json(newTrustAcc);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Trust Account!", error });
  }
};

// Update a Trust Account Details
export const updateTrustAccount = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    bankId,
    reportingDate,
    bankAccNumber,
    trustAccDrTypeCode,
    orgReceivingDonation,
    sectorCode = "",
    trustAccIntUtilizedDetails,
    openingBal,
    principalAmount,
    interestEarned,
    trustAccInterestUtilized,
  } = req.body;

  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedTrustAcc = await prisma.trustAcc.update({
      where: { rowId },
      data: {
        pspId,
        bankId,
        reportingDate,
        bankAccNumber,
        trustAccDrTypeCode,
        orgReceivingDonation,
        sectorCode,
        trustAccIntUtilizedDetails,
        openingBal: parseFloat(openingBal),
        principalAmount: parseFloat(principalAmount),
        interestEarned: parseFloat(interestEarned),
        closingBal: parseFloat(principalAmount) + parseFloat(interestEarned),
        trustAccInterestUtilized: parseFloat(trustAccInterestUtilized),
      },
    });

    res
      .status(202)
      .json({ message: "Account updated successfully!", updatedTrustAcc });
  } catch (error) {
    res.status(500).json({ message: "Failed to update trust account!", error });
  }
};

// Delete a Trust Account Detail
export const deleteTrustAccount = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.trustAcc.delete({
      where: { rowId },
    });

    res.status(204).json({ message: "Trust account deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete trust account!" });
  }
};
