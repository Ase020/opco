import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Customer Complaints
export const getCustomerComplaints = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cx" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const customerComplaints = await prisma.customerComplaint.findMany();

    res.status(200).json(customerComplaints);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Customer Complaints!", error });
  }
};

// Get a Customer Complaint
export const getCustomerComplaint = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cx" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const oneCustomerComplaint = await prisma.customerComplaint.findUnique({
      where: { rowId },
    });

    res.status(200).json(oneCustomerComplaint);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Customer Complaint!", error });
  }
};

// Create a Customer Complaint
export const createCustomerComplaint = async (req, res) => {
  const {
    pspId,
    reportingDate,
    code,
    gender,
    frequency,
    name,
    age,
    contact,
    subCounty,
    education,
    otherDetails,
    agentId,
    dateOfOccurrence,
    dateReported,
    dateResolved,
    remedialStatus,
    amountLost,
    amountRecovered,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cx" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newCustomerComplaint = await prisma.customerComplaint.create({
      data: {
        pspId,
        reportingDate,
        code,
        gender,
        frequency,
        name,
        age: parseInt(age),
        contact,
        subCounty,
        education,
        otherDetails,
        agentId,
        dateOfOccurrence,
        dateReported,
        dateResolved,
        remedialStatus,
        amountLost: parseFloat(amountLost),
        amountRecovered: parseFloat(amountRecovered),
      },
    });

    res.status(201).json(newCustomerComplaint);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create a Customer Complaint!", error });
  }
};

// Update a Customer Complaint
export const updateCustomerComplaint = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    pspId,
    reportingDate,
    code,
    gender,
    frequency,
    name,
    age,
    contact,
    subCounty,
    education,
    otherDetails,
    agentId,
    dateOfOccurrence,
    dateReported,
    dateResolved,
    remedialStatus,
    amountLost,
    amountRecovered,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cx" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedCustomerComplaint = await prisma.customerComplaint.update({
      where: { rowId },
      data: {
        pspId,
        reportingDate,
        code,
        gender,
        frequency,
        name,
        age: parseInt(age),
        contact,
        subCounty,
        education,
        otherDetails,
        agentId,
        dateOfOccurrence,
        dateReported,
        dateResolved,
        remedialStatus,
        amountLost: parseFloat(amountLost),
        amountRecovered: parseFloat(amountRecovered),
      },
    });

    res.status(202).json(updatedCustomerComplaint);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update a Customer Complaint!", error });
  }
};

// Delete a Customer Complaint
export const deleteCustomerComplaint = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "cx" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.customerComplaint.delete({
      where: { rowId },
    });

    res
      .status(204)
      .json({ message: "Customer Complaint deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Customer Complaint!", error });
  }
};
