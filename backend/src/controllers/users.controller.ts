import { NextFunction, Request, Response } from "express";
import { usersService } from "../services/users.service.js";
import { validateUserIds } from "../validators/validateUserIds.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { TokenError } from "../errors/TokenError.js";
import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { castFrontendType } from "../middlewares/castFrontendType.js";

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

  getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new TokenError(ERROR_MESSAGES.INVALID_TOKEN);
      }
      res.status(STATUS_CODES.OK).json({ user: castFrontendType(req.user) });
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
