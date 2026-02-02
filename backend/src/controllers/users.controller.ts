import { NextFunction, Request, Response } from "express";
import { STATUS_CODES } from "@constants/statusCodes.js";
import { usersService } from "@services/users.service.js";
import { ValidationError } from "@errors/ValidationError.js";
import { validateUserIds } from "validators/validateUserIds.js";

class UsersController {
  private usersService = usersService;

  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let { sortOrder, sortBy } = req.query;
      sortOrder = typeof sortOrder === "string" ? sortOrder : "";
      sortBy = typeof sortBy === "string" ? sortBy : "";
      const users = await usersService.getUsers(sortBy, sortOrder);
      res.status(STATUS_CODES.OK).json(users);
    } catch (error) {
      next(error);
    }
  };

  blockUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userIds } = req.body ?? {};
      const typedUserIds = validateUserIds(userIds);
      await usersService.blockUsers(typedUserIds);
      res.status(STATUS_CODES.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  };
}

export const usersController = new UsersController();
