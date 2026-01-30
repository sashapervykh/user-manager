import express from "express";
import pool from "./config/db.js";

const port = process.env.PORT ?? 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
