import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import authRouter from "./routes/auth.route.js";
import trustAccountRouter from "./routes/trustAccountRouter.route.js";
import trustAccPlacementRouter from "./routes/trustAccPlacementRouter.route.js";
import fraudIncidentRouter from "./routes/fraudIncident.route.js";
import conterfeitCurrencyFraudRouter from "./routes/conterfeitCurrencyFraud.route.js";

const app = express();

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRouter);
app.use("/api/trust-accounts", trustAccountRouter);
app.use("/api/trust-account-placements", trustAccPlacementRouter);
app.use("/api/psp-incidents-of-fraud-theft-robbery", fraudIncidentRouter);
app.use(
  "/api/mobile-psp-counterfeit-currency-frauds",
  conterfeitCurrencyFraudRouter
);

app.listen(8800, () => {
  console.log("Server running!");
});
