import { NextFunction, Request, Response } from "express";
import { STATUS_CODES } from "@constants/statusCodes.js";
import { usersService } from "@services/users.service.js";
import { validateUserIds } from "validators/validateUserIds.js";

class UsersController {
  private usersService = usersService;

  blockUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userIds } = req.body ?? {};
      const typedUserIds = validateUserIds(userIds);
      await usersService.blockUsers(typedUserIds);
      res.status(STATUS_CODES.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  };

  deleteUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userIds } = req.body ?? {};
      const typedUserIds = validateUserIds(userIds);
      await usersService.deleteUsers(typedUserIds);
      res.status(STATUS_CODES.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  };

  deleteUnverified = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      await usersService.deleteUnverified();
      res.status(STATUS_CODES.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  };

  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let { sortOrder, sortBy } = req.query;
      sortOrder = typeof sortOrder === "string" ? sortOrder : undefined;
      sortBy = typeof sortBy === "string" ? sortBy : undefined;
      const users = await usersService.getUsers(sortBy, sortOrder);
      res.status(STATUS_CODES.OK).json(users);
    } catch (error) {
      next(error);
    }
  };

  unblockUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userIds } = req.body ?? {};
      const typedUserIds = validateUserIds(userIds);
      await usersService.unblockUsers(typedUserIds);
      res.status(STATUS_CODES.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  };
}

export const usersController = new UsersController();
