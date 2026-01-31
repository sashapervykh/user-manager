import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./routes/auth.route.js";

const port = process.env.PORT ?? 3000;
const app = express();

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
