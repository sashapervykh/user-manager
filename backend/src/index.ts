import express from "express";
import { handleErrors } from "@middlewares/handleErrors.js";
import authRouter from "@routes/auth.route.js";

const port = process.env.PORT ?? 3000;
const app = express();
app.use(express.json());
app.use("/auth", authRouter);
app.use(handleErrors);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
