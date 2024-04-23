import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import authRouter from "./routes/auth.route.js";
import trustAccountRouter from "./routes/trustAccountRouter.route.js";
import trustAccPlacementRouter from "./routes/trustAccPlacementRouter.route.js";
import fraudIncidentRouter from "./routes/fraudIncident.route.js";
import conterfeitCurrencyFraudRouter from "./routes/conterfeitCurrencyFraud.route.js";
import cybersecurityIncidentRouter from "./routes/cybersecurityIncident.route.js";
import shareholdersRouter from "./routes/shareholders.route.js";
import directorsRouter from "./routes/directors.route.js";
import trusteesRouter from "./routes/trustees.route.js";
import seniorMgtRouter from "./routes/seniorMgt.route.js";
import userRouter from "./routes/user.route.js";

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
app.use("/api/trust-accounts", trustAccountRouter);
app.use("/api/trust-account-placements", trustAccPlacementRouter);
app.use("/api/psp-incidents-of-fraud-theft-robbery", fraudIncidentRouter);
app.use(
  "/api/mobile-psp-counterfeit-currency-frauds",
  conterfeitCurrencyFraudRouter
);
app.use("/api/psp-cybersecurity-incident-record", cybersecurityIncidentRouter);
app.use("/api/psp-schedule-of-shareholders", shareholdersRouter);
app.use("/api/psp-schedule-of-directors", directorsRouter);
app.use("/api/psp-schedule-of-trustees", trusteesRouter);
app.use("/api/psp-schedule-of-senior-management", seniorMgtRouter);

app.listen(8800, () => {
  console.log("Server running!");
});
