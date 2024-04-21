import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

// Get all Senior Mgts
export const getSeniorMgts = async (req, res) => {
  const token = req.cookies?.token;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "am" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const seniorManagers = await prisma.seniorMgt.findMany();

    res.status(200).json(seniorManagers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Senior Mgts!", error });
  }
};

// Get a Senior Mgt
export const getSeniorMgt = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "am" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const seniorManager = await prisma.seniorMgt.findUnique({
      where: { rowId },
    });

    res.status(200).json(seniorManager);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Director!", error });
  }
};

// Create a Senior Mgt
export const createSeniorMgt = async (req, res) => {
  const {
    pspId,
    reportingDate,
    officerName,
    officerGender,
    designation,
    dateOfBirth,
    nationalityOfOfficer,
    idNumber,
    kraPin,
    academicQualifications,
    dateOfEmployment,
    employmentType,
    expectedDateOfRetirement,
    otherAffiliations,
    disclosureDetails,
  } = req.body;
  // const tokenUserId = req.userId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "am" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newSeniorManager = await prisma.seniorMgt.create({
      data: {
        pspId,
        reportingDate,
        officerName,
        officerGender,
        designation,
        dateOfBirth,
        nationalityOfOfficer,
        idNumber,
        kraPin,
        academicQualifications,
        dateOfEmployment,
        employmentType,
        expectedDateOfRetirement,
        otherAffiliations,
        disclosureDetails,
      },
    });

    res.status(201).json(newSeniorManager);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create Senior Manager!", error });
  }
};

// Update a Senior Mgt
export const updateSeniorMgt = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    reportingDate,
    officerName,
    officerGender,
    designation,
    dateOfBirth,
    nationalityOfOfficer,
    idNumber,
    kraPin,
    academicQualifications,
    dateOfEmployment,
    employmentType,
    expectedDateOfRetirement,
    otherAffiliations,
    disclosureDetails,
  } = req.body;

  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "am" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedSeniorManager = await prisma.seniorMgt.update({
      where: { rowId },
      data: {
        pspId,
        reportingDate,
        officerName,
        officerGender,
        designation,
        dateOfBirth,
        nationalityOfOfficer,
        idNumber,
        kraPin,
        academicQualifications,
        dateOfEmployment,
        employmentType,
        expectedDateOfRetirement,
        otherAffiliations,
        disclosureDetails,
      },
    });

    res.status(202).json({
      message: "Senior Mgt updated successfully!",
      updatedSeniorManager,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update Senior Mgt!", error });
  }
};

// Delete a Director
export const deleteSeniorMgt = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "am" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.seniorMgt.delete({
      where: { rowId },
    });

    res.status(204).json({ message: "Senior Mgt deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Senior Mgt!" });
  }
};
