import { authController } from "@controllers/auth.controller.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  try {
    const result = await authController.register();
    res
      .status(200)
      .json({ message: "User registered successfully", user: result });
  } catch (error) {
    res.status(409).json({ message: "User is already exists", error: error });
  }
});

export default authRouter;
