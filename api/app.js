import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
  authRouter,
  counterfeitCurrencyFraudRouter,
  cybersecurityIncidentRouter,
  directorManagementRouter,
  directorsRouter,
  exchangeRateInfoRouter,
  exchangeRatePositionRouter,
  financialPositionRouter,
  fraudIncidentRouter,
  outletInformationRouter,
  scheduleOfCustomerComplaintRouter,
  seniorMgtRouter,
  shareholderInfoRouter,
  shareholdersRouter,
  trustAccPlacementRouter,
  trustAccountRouter,
  trusteesRouter,
  userRouter,
} from "./routes/index.js";

const app = express();

dotenv.config();
app.use(cookieParser());
app.use(express.json());

const corOptions = {
  origin: ["https://opco.vercel.app", "http://localhost:5173"],
  credentials: true,
};

app.use(cors(corOptions));
// app.use(cors({ origin: "https://opco.vercel.app", credentials: true }));
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

// Payment Services Providers(PSP)
app.use("/api/trust-accounts", trustAccountRouter);
app.use("/api/trust-account-placements", trustAccPlacementRouter);
app.use("/api/psp-incidents-of-fraud-theft-robbery", fraudIncidentRouter);
app.use(
  "/api/mobile-psp-counterfeit-currency-frauds",
  counterfeitCurrencyFraudRouter
);
app.use("/api/psp-cybersecurity-incident-record", cybersecurityIncidentRouter);
app.use("/api/psp-schedule-of-shareholders", shareholdersRouter);
app.use("/api/psp-schedule-of-directors", directorsRouter);
app.use("/api/psp-schedule-of-trustees", trusteesRouter);
app.use("/api/psp-schedule-of-senior-management", seniorMgtRouter);

// Banking Supervision Department(BSD)
app.use("/api/exchange-rate-info", exchangeRateInfoRouter);
app.use("/api/exchange-rate-position", exchangeRatePositionRouter);
app.use("/api/director-management-info", directorManagementRouter);
app.use("/api/shareholder-info", shareholderInfoRouter);
app.use("/api/financial-position", financialPositionRouter);
app.use("/api/outlet-information", outletInformationRouter);
app.use(
  "/api/psp-schedule-of-customer-complaints-&-remedial-actions",
  scheduleOfCustomerComplaintRouter
);

app.listen(8800, () => {
  console.log("Server running!");
});
