import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

// Get all Trustees
export const getTrustees = async (req, res) => {
  const token = req.cookies?.token;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const allTrustees = await prisma.trustee.findMany();

    res.status(200).json(allTrustees);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Trustees!", error });
  }
};

// Get a Trustee
export const getTrustee = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const oneTrustee = await prisma.trustee.findUnique({
      where: { rowId },
    });

    res.status(200).json(oneTrustee);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Trustee!", error });
  }
};

// Create a Trustee
export const createTrustee = async (req, res) => {
  const {
    pspId,
    reportingDate,
    trustCompanyName,
    directorsOfTrustCo,
    trusteeNames,
    trustGender,
    dateOfBirth,
    nationalityOfTrustee,
    residenceOfShareholder,
    idNumber,
    kraPin,
    contact,
    academicQualifications,
    otherTrusteeships,
    disclosureDetails,
    shareholderOfTrust,
    percentageOfShareholding,
  } = req.body;
  // const tokenUserId = req.userId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newTrustee = await prisma.trustee.create({
      data: {
        pspId,
        reportingDate,
        trustCompanyName,
        directorsOfTrustCo,
        trusteeNames,
        trustGender,
        dateOfBirth,
        nationalityOfTrustee,
        residenceOfShareholder,
        idNumber,
        kraPin,
        contact,
        academicQualifications,
        otherTrusteeships,
        disclosureDetails,
        shareholderOfTrust,
        percentageOfShareholding: parseFloat(percentageOfShareholding),
      },
    });

    res.status(201).json(newTrustee);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Trustee!", error });
  }
};

// Update a Trustee
export const updateTrustee = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    reportingDate,
    trustCompanyName,
    directorsOfTrustCo,
    trusteeNames,
    trustGender,
    dateOfBirth,
    nationalityOfTrustee,
    residenceOfShareholder,
    idNumber,
    kraPin,
    contact,
    academicQualifications,
    otherTrusteeships,
    disclosureDetails,
    shareholderOfTrust,
    percentageOfShareholding,
  } = req.body;

  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedTrustee = await prisma.trustee.update({
      where: { rowId },
      data: {
        pspId,
        reportingDate,
        trustCompanyName,
        directorsOfTrustCo,
        trusteeNames,
        trustGender,
        dateOfBirth,
        nationalityOfTrustee,
        residenceOfShareholder,
        idNumber,
        kraPin,
        contact,
        academicQualifications,
        otherTrusteeships,
        disclosureDetails,
        shareholderOfTrust,
        percentageOfShareholding: parseFloat(percentageOfShareholding),
      },
    });

    res
      .status(202)
      .json({ message: "Trustee updated successfully!", updatedTrustee });
  } catch (error) {
    res.status(500).json({ message: "Failed to update Trustee!", error });
  }
};

// Delete a Trustee
export const deleteTrustee = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.trustee.delete({
      where: { rowId },
    });

    res.status(204).json({ message: "Trustee deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Trustee!" });
  }
};
