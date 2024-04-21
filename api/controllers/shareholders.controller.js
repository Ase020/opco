import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

// Get all Shareholders
export const getShareholders = async (req, res) => {
  const token = req.cookies?.token;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const shareholders = await prisma.shareholder.findMany();

    res.status(200).json(shareholders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Shareholders!", error });
  }
};

// Get a Shareholder
export const getShareholder = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const oneShareholder = await prisma.shareholder.findUnique({
      where: { rowId },
    });

    res.status(200).json(oneShareholder);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Shareholder!", error });
  }
};

// Create a Shareholder
export const createShareholder = async (req, res) => {
  const {
    pspId,
    reportingDate,
    shareholderName,
    shareholderGender,
    shareholderType,
    dateOfBirth,
    nationalityOfShareholder,
    residenceOfShareholder,
    countryOfIncorporation,
    idNumber,
    kraPin,
    contact,
    academicQualifications,
    previousEmployment,
    dateBecameShareholder,
    numberOfShareHeld,
    shareValue,
    percentageOfShare,
  } = req.body;
  // const tokenUserId = req.userId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newShareholder = await prisma.shareholder.create({
      data: {
        pspId,
        reportingDate,
        shareholderName,
        shareholderGender,
        shareholderType,
        dateOfBirth,
        nationalityOfShareholder,
        residenceOfShareholder,
        countryOfIncorporation,
        idNumber,
        kraPin,
        contact,
        academicQualifications,
        previousEmployment,
        dateBecameShareholder,
        numberOfShareHeld: parseInt(numberOfShareHeld),
        shareValue: parseFloat(shareValue),
        percentageOfShare: parseFloat(percentageOfShare),
      },
    });

    res.status(201).json(newShareholder);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Shareholder!", error });
  }
};

// Update a Shareholder
export const updateShareholder = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    reportingDate,
    shareholderName,
    shareholderGender,
    shareholderType,
    dateOfBirth,
    nationalityOfShareholder,
    residenceOfShareholder,
    countryOfIncorporation,
    idNumber,
    kraPin,
    contact,
    academicQualifications,
    previousEmployment,
    dateBecameShareholder,
    numberOfShareHeld,
    shareValue,
    percentageOfShare,
  } = req.body;

  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedShareholder = await prisma.shareholder.update({
      where: { rowId },
      data: {
        pspId,
        reportingDate,
        shareholderName,
        shareholderGender,
        shareholderType,
        dateOfBirth,
        nationalityOfShareholder,
        residenceOfShareholder,
        countryOfIncorporation,
        idNumber,
        kraPin,
        contact,
        academicQualifications,
        previousEmployment,
        dateBecameShareholder,
        numberOfShareHeld: parseInt(numberOfShareHeld),
        shareValue: parseFloat(shareValue),
        percentageOfShare: parseFloat(percentageOfShare),
      },
    });

    res
      .status(202)
      .json({
        message: "Shareholder updated successfully!",
        updatedShareholder,
      });
  } catch (error) {
    res.status(500).json({ message: "Failed to update Shareholder!", error });
  }
};

// Delete a Shareholder
export const deleteShareholder = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.shareholder.delete({
      where: { rowId },
    });

    res.status(204).json({ message: "Shareholder deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Shareholder!" });
  }
};
