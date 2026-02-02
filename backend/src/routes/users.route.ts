import { usersController } from "@controllers/users.controller.js";
import { Router } from "express";

const usersRouter = Router();
usersRouter.get("/", usersController.getUsers);
usersRouter.put("/block", usersController.blockUsers);
usersRouter.put("/unblock", usersController.unblockUsers);
usersRouter.delete("/", usersController.deleteUsers);
usersRouter.delete("/unverified", usersController.deleteUnverified);

export default usersRouter;
