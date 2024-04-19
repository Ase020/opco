import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import trustAccountRouter from "./routes/trustAccountRouter.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/trust-accounts", trustAccountRouter);
app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("Server running!");
});
