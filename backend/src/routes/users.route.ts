import { usersController } from "@controllers/users.controller.js";
import { Router } from "express";

const usersRouter = Router();
usersRouter.get("/", usersController.getUsers);

export default usersRouter;
