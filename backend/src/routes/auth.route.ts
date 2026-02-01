import { authController } from "@controllers/auth.controller.js";
import { Router } from "express";

const authRouter = Router();
authRouter.post("/register", authController.register);
authRouter.post("/register", authController.login);

export default authRouter;
