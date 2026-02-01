import { NextFunction, Request, Response } from "express";
import { STATUS_CODES } from "@constants/statusCodes.js";
import { usersService } from "@services/users.service.js";

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
}

export const usersController = new UsersController();
