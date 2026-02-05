import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";

const emailRouter = Router();
emailRouter.post("/", authController.register);

export default emailRouter;
