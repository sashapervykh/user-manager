import { usersController } from "@controllers/users.controller.js";
import { Router } from "express";

const usersRouter = Router();
usersRouter.get("/", usersController.getUsers);
usersRouter.get("/block", usersController.blockUsers);

export default usersRouter;
