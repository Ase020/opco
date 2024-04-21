import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

// Get all Directors
export const getDirectors = async (req, res) => {
  const token = req.cookies?.token;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const directors = await prisma.director.findMany();

    res.status(200).json(directors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Directors!", error });
  }
};

// Get a Director
export const getDirector = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const oneDirector = await prisma.director.findUnique({
      where: { rowId },
    });

    res.status(200).json(oneDirector);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Director!", error });
  }
};

// Create a Director
export const createDirector = async (req, res) => {
  const {
    pspId,
    reportingDate,
    directorName,
    directorGender,
    directorType,
    dateOfBirth,
    nationalityOfDirector,
    residenceOfDirector,
    idNumber,
    kraPin,
    contact,
    academicQualifications,
    otherDirectorships,
    dateOfAppointment,
    dateOfRetirement,
    reasonForRetirement,
    disclosureDetails,
  } = req.body;
  // const tokenUserId = req.userId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newDirector = await prisma.director.create({
      data: {
        pspId,
        reportingDate,
        directorName,
        directorGender,
        directorType,
        dateOfBirth,
        nationalityOfDirector,
        residenceOfDirector,
        idNumber,
        kraPin,
        contact,
        academicQualifications,
        otherDirectorships,
        dateOfAppointment,
        dateOfRetirement,
        reasonForRetirement,
        disclosureDetails,
      },
    });

    res.status(201).json(newDirector);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Director!", error });
  }
};

// Update a Director
export const updateDirector = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    reportingDate,
    directorName,
    directorGender,
    directorType,
    dateOfBirth,
    nationalityOfDirector,
    residenceOfDirector,
    idNumber,
    kraPin,
    contact,
    academicQualifications,
    otherDirectorships,
    dateOfAppointment,
    dateOfRetirement,
    reasonForRetirement,
    disclosureDetails,
  } = req.body;

  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedDirector = await prisma.director.update({
      where: { rowId },
      data: {
        pspId,
        reportingDate,
        directorName,
        directorGender,
        directorType,
        dateOfBirth,
        nationalityOfDirector,
        residenceOfDirector,
        idNumber,
        kraPin,
        contact,
        academicQualifications,
        otherDirectorships,
        dateOfAppointment,
        dateOfRetirement,
        reasonForRetirement,
        disclosureDetails,
      },
    });

    res
      .status(202)
      .json({ message: "Director updated successfully!", updatedDirector });
  } catch (error) {
    res.status(500).json({ message: "Failed to update Director!", error });
  }
};

// Delete a Director
export const deleteDirector = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "legal" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.director.delete({
      where: { rowId },
    });

    res.status(204).json({ message: "Director deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Director!" });
  }
};
