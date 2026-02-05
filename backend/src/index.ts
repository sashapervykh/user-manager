import express from "express";
import cors from "cors";
import { handleErrors } from "@middlewares/handleErrors.js";
import authRouter from "@routes/auth.route.js";
import { requireAuth } from "@middlewares/requireAuth.js";
import usersRouter from "@routes/users.route.js";
import { CORS_POLICY } from "@config/cors.js";

const port = process.env.PORT ?? 3000;
const app = express();
app.use(cors(CORS_POLICY));
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", requireAuth, usersRouter);
app.use(handleErrors);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
