import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Outlets Information
export const getOutletInfos = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const outletInfos = await prisma.outletInfo.findMany();

    res.status(200).json(outletInfos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Outlets Information!", error });
  }
};

// Get an Outlet Information
export const getOutletInfo = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const outletInfo = await prisma.outletInfo.findUnique({
      where: { rowId },
    });

    res.status(200).json(outletInfo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Outlet Information!", error });
  }
};

// Create an Outlet Information
export const createOutletInfo = async (req, res) => {
  const {
    bankId,
    outletId,
    reportingDate,
    typeOfOutlet,
    outletName,
    town,
    subCountyCode,
    latitude,
    longitude,
    cbkApprovalDate,
    outletStatus,
    openingDate,
    closureDate,
    licenseFeePayable,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newOutletInfo = await prisma.outletInfo.create({
      data: {
        bankId,
        outletId,
        reportingDate,
        typeOfOutlet,
        outletName,
        town,
        subCountyCode,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        cbkApprovalDate,
        outletStatus,
        openingDate,
        closureDate,
        licenseFeePayable: parseFloat(licenseFeePayable),
      },
    });

    res.status(201).json(newOutletInfo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create a Outlet Information!",
      error,
    });
  }
};

// Update an Outlet Information
export const updateOutletInfo = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    bankId,
    outletId,
    reportingDate,
    typeOfOutlet,
    outletName,
    town,
    subCountyCode,
    latitude,
    longitude,
    cbkApprovalDate,
    outletStatus,
    openingDate,
    closureDate,
    licenseFeePayable,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedOutletInfo = await prisma.outletInfo.update({
      where: { rowId },
      data: {
        bankId,
        outletId,
        reportingDate,
        typeOfOutlet,
        outletName,
        town,
        subCountyCode,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        cbkApprovalDate,
        outletStatus,
        openingDate,
        closureDate,
        licenseFeePayable: parseFloat(licenseFeePayable),
      },
    });

    res.status(202).json(updatedOutletInfo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update a Outlet Information!",
      error,
    });
  }
};

// Delete an Outlet Information
export const deleteOutletInfo = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.outletInfo.delete({
      where: { rowId },
    });

    res
      .status(204)
      .json({ message: "Outlet Information deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Outlet Information!", error });
  }
};
