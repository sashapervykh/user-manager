import { Router } from "express";
import { usersController } from "../controllers/users.controller.js";

const usersRouter = Router();
usersRouter.get("/", usersController.getUsers);
usersRouter.post("/me", usersController.getUser);
usersRouter.put("/block", usersController.blockUsers);
usersRouter.put("/unblock", usersController.unblockUsers);
usersRouter.delete("/", usersController.deleteUsers);
usersRouter.delete("/unverified", usersController.deleteUnverified);

export default usersRouter;
