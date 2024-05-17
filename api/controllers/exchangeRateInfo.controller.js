import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

// Get all Exchange Rate Infos
export const getExchangeRateInfos = async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const exchangeRateInfos = await prisma.exchangeRatesInfo.findMany();

    res.status(200).json(exchangeRateInfos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Exchange Rate Infos!", error });
  }
};

// Get a Exchange Rate Info
export const getExchangeRateInfo = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const exchangeRateInfo = await prisma.exchangeRatesInfo.findUnique({
      where: { rowId },
    });

    res.status(200).json(exchangeRateInfo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch Exchange Rate Info!", error });
  }
};

// Create a Exchange Rate Info
export const createExchangeRateInfo = async (req, res) => {
  const {
    institutionCode,
    reportingDate,
    currencyCode,
    buyingRate,
    sellingRate,
    meanRate,
    closingBidRate,
    closingOfferRate,
    usdCrossRate,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const newExchangeRateInfo = await prisma.exchangeRatesInfo.create({
      data: {
        institutionCode,
        reportingDate,
        currencyCode,
        buyingRate: parseFloat(buyingRate),
        sellingRate: parseFloat(sellingRate),
        meanRate: parseFloat(meanRate),
        closingBidRate: parseFloat(closingBidRate),
        closingOfferRate: parseFloat(closingOfferRate),
        usdCrossRate: parseFloat(usdCrossRate),
      },
    });

    res.status(201).json(newExchangeRateInfo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create a Exchange Rate Info!",
      error,
    });
  }
};

// Update a Exchange Rate Info
export const updateExchangeRateInfo = async (req, res) => {
  const rowId = req.params.rowId;
  const {
    institutionCode,
    reportingDate,
    currencyCode,
    buyingRate,
    sellingRate,
    meanRate,
    closingBidRate,
    closingOfferRate,
    usdCrossRate,
  } = req.body;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    const updatedExchangeRateInfo = await prisma.exchangeRatesInfo.update({
      where: { rowId },
      data: {
        institutionCode,
        reportingDate,
        currencyCode,
        buyingRate: parseFloat(buyingRate),
        sellingRate: parseFloat(sellingRate),
        meanRate: parseFloat(meanRate),
        closingBidRate: parseFloat(closingBidRate),
        closingOfferRate: parseFloat(closingOfferRate),
        usdCrossRate: parseFloat(usdCrossRate),
      },
    });

    res.status(202).json(updatedExchangeRateInfo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update a Exchange Rate Info!",
      error,
    });
  }
};

// Delete a Exchange Rate Info
export const deleteExchangeRateInfo = async (req, res) => {
  const rowId = req.params.rowId;
  const token = req.cookies?.token;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userTokenUserType = decodedToken.userType;

    if (userTokenUserType !== "trust" && userTokenUserType !== "superAdmin")
      return res.status(500).json({ message: "Not Authorized!" });

    await prisma.exchangeRatesInfo.delete({
      where: { rowId },
    });

    res
      .status(204)
      .json({ message: "Exchange Rate Info deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Exchange Rate Info!", error });
  }
};
