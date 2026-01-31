import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", (req, res) => {
  res.status(501).json({ message: "Register endpoint not implemented yet" });
});

export default authRouter;
