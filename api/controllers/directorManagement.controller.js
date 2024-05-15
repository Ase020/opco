import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Director Management Infos
export const getDirectorManagements = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const directorManagementInfo =
      await prisma.directorManagementInfo.findMany();

    res.status(200).json(directorManagementInfo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Director Management Infos!", error });
  }
};

// Get a Director Management Info
export const getDirectorManagement = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const directorManagementInfo =
      await prisma.directorManagementInfo.findUnique({
        where: { rowId },
      });

    res.status(200).json(directorManagementInfo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Director Management Info!", error });
  }
};

// Create a Director Management Info
export const createDirectorManagement = async (req, res) => {
  const {
    institutionCode,
    reportingDate,
    sequenceId,
    nameOfDirector,
    staffId,
    memberType,
    executiveCatType,
    gender,
    nationality,
    residency,
    identificationNumber,
    passportNumber,
    dob,
    academicQualification,
    profession,
    contactNumber,
    email,
    appointmentDate,
    cbkApprovalDate,
    boardChairCommittee,
    boardCommitteeName,
    managementCommitteeName,
    companyName,
    roleInCompany,
    shareholdingFlag,
    shareholdingInfo,
    bankingExperience,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newDirectorManagementInfo =
      await prisma.directorManagementInfo.create({
        data: {
          institutionCode,
          reportingDate,
          sequenceId,
          nameOfDirector,
          staffId,
          memberType,
          executiveCatType,
          gender,
          nationality,
          residency,
          identificationNumber,
          passportNumber,
          dob,
          academicQualification,
          profession,
          contactNumber,
          email,
          appointmentDate,
          cbkApprovalDate,
          boardChairCommittee,
          boardCommitteeName,
          managementCommitteeName,
          companyName,
          roleInCompany,
          shareholdingFlag,
          shareholdingInfo,
          bankingExperience: parseInt(bankingExperience),
        },
      });

    res.status(201).json(newDirectorManagementInfo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create a Director Management Info!",
      error,
    });
  }
};

// Update a Director Management Info
export const updateDirectorManagement = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    institutionCode,
    reportingDate,
    sequenceId,
    nameOfDirector,
    staffId,
    memberType,
    executiveCatType,
    gender,
    nationality,
    residency,
    identificationNumber,
    passportNumber,
    dob,
    academicQualification,
    profession,
    contactNumber,
    email,
    appointmentDate,
    cbkApprovalDate,
    boardChairCommittee,
    boardCommitteeName,
    managementCommitteeName,
    companyName,
    roleInCompany,
    shareholdingFlag,
    shareholdingInfo,
    bankingExperience,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedDirectorManagementInfo =
      await prisma.directorManagementInfo.update({
        where: { rowId },
        data: {
          institutionCode,
          reportingDate,
          sequenceId,
          nameOfDirector,
          staffId,
          memberType,
          executiveCatType,
          gender,
          nationality,
          residency,
          identificationNumber,
          passportNumber,
          dob,
          academicQualification,
          profession,
          contactNumber,
          email,
          appointmentDate,
          cbkApprovalDate,
          boardChairCommittee,
          boardCommitteeName,
          managementCommitteeName,
          companyName,
          roleInCompany,
          shareholdingFlag,
          shareholdingInfo,
          bankingExperience: parseInt(bankingExperience),
        },
      });

    res.status(202).json(updatedDirectorManagementInfo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update a Director Management Info!",
      error,
    });
  }
};

// Delete a Director Management Info
export const deleteDirectorManagement = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "security" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.directorManagementInfo.delete({
      where: { rowId },
    });

    res
      .status(204)
      .json({ message: "Director Management Info deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Director Management Info!", error });
  }
};
