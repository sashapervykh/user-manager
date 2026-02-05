import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/email-verification", authController.verifyEmailByToken);

export default authRouter;
