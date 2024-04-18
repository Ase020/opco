import express from "express";
import dotenv from "dotenv";

import trustAccountRouter from "./routes/trustAccountRouter.route.js";

const app = express();

dotenv.config();
app.use(express.json());

app.use("/api/trust-accounts", trustAccountRouter);

app.listen(8800, () => {
  console.log("Server running!");
});
