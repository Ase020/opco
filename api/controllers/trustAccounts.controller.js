import prisma from "../lib/prisma.js";

export const getTrustAccounts = async (req, res) => {
  try {
    const trustAccounts = await prisma.trustAcc.findMany();

    res.status(200).json(trustAccounts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Trust Accounts!", error });
  }
};

export const getTrustAccount = async (req, res) => {
  const rowId = req.params.rowId;

  try {
    const trustAccount = await prisma.trustAcc.findUnique({
      where: { rowId },
    });

    res.status(200).json(trustAccount);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Trust Account!", error });
  }
};

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

  try {
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

export const updateTrustAccount = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    bankId,
    reportingDate,
    bankAccNumber,
    trustAccDrTypeCode,
    orgReceivingDonation,
    sectorCode,
    trustAccIntUtilizedDetails,
    openingBal,
    principalAmount,
    interestEarned,
    closingBal,
    trustAccInterestUtilized,
  } = req.body;

  try {
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
        openingBal,
        principalAmount,
        interestEarned,
        closingBal,
        trustAccInterestUtilized,
      },
    });

    res
      .status(202)
      .json({ message: "Account updated successfully!", updatedTrustAcc });
  } catch (error) {
    res.status(500).json({ message: "Failed to update trust account!", error });
  }
};

export const deleteTrustAccount = async (req, res) => {
  const rowId = req.params.rowId;

  try {
    await prisma.trustAcc.delete({
      where: { rowId },
    });

    res.status(204).json({ message: "Trust account deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete trust account!" });
  }
};
