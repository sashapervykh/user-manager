import express from "express";
import { handleErrors } from "@middlewares/handleErrors.js";
import authRouter from "@routes/auth.route.js";
import { requireAuth } from "@middlewares/requireAuth.js";

const port = process.env.PORT ?? 3000;
const app = express();
app.use(express.json());
app.use("/users", authRouter);
app.use("/auth", authRouter);
app.get("/users", requireAuth, (req, res) => res.status(200).send("All good"));
app.use(handleErrors);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
