import express from "express";
import dotenv from "dotenv";

import trustAccountRouter from "./routes/trustAccountRouter.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

dotenv.config();
app.use(express.json());

app.use("/api/trust-accounts", trustAccountRouter);
app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("Server running!");
});
