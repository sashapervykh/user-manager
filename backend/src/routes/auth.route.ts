import { authController } from "@controllers/auth.controller.js";
import { Router } from "express";

const authRouter = Router();
authRouter.post("/register", authController.register);
authRouter.get("/login", authController.login);

export default authRouter;
