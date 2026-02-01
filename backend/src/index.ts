import express from "express";
import { handleErrors } from "@middlewares/handleErrors.js";
import authRouter from "@routes/auth.route.js";
import { requireAuth } from "@middlewares/requireAuth.js";
import usersRouter from "@routes/users.route.js";

const port = process.env.PORT ?? 3000;
const app = express();
app.use(express.json());
app.use("/users", authRouter);
app.use("/auth", authRouter);
app.use("/users", requireAuth);
app.use("/users", usersRouter);
app.use(handleErrors);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
