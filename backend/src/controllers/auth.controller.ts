import { NextFunction, Request, Response } from "express";
import { UserRegisterDto } from "@models/dtos/UserRegisterDto.js";
import { authService } from "@services/auth.service.js";
import { ValidationError } from "@errors/ValidationError.js";
import { STATUS_CODES } from "@constants/statusCodes.js";

class AuthController {
  authService = authService;

  register = async (
    req: Request<{}, {}, UserRegisterDto>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { email, password, first_name, last_name } = req.body ?? {};
      if (!email || !password || !first_name || !last_name) {
        throw new ValidationError();
      }
      const user = await authService.register(req.body);
      res
        .status(STATUS_CODES.CREATED)
        .json({ message: "User registered successfully", user });
    } catch (error) {
      next(error);
    }
  };
}

export const authController = new AuthController();
