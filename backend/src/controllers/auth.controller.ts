import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service.js";
import { UserRegisterDto } from "../models/dtos/UserRegisterDto.js";
import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { ValidationError } from "../errors/ValidationError.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { UserLoginDto } from "../models/dtos/UserLoginDto.js";
import { emailService } from "../services/email.service.js";
import { TokenError } from "../errors/TokenError.js";

class AuthController {
  private authService = authService;

  register = async (
    req: Request<{}, {}, UserRegisterDto>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const {
        email,
        password,
        firstName: first_name,
        lastName: last_name,
      } = req.body ?? {};
      if (!email || !password || !first_name || !last_name) {
        throw new ValidationError(ERROR_MESSAGES.REGISTER_VALIDATION_ERROR);
      }
      const { user, token } = await authService.register(req.body);
      res
        .status(STATUS_CODES.CREATED)
        .json({ message: "User registered successfully", user, token });
    } catch (error) {
      next(error);
    }
  };

  login = async (
    req: Request<{}, {}, UserLoginDto>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { email, password } = req.body ?? {};
      if (!email || !password) {
        throw new ValidationError(ERROR_MESSAGES.LOGIN_VALIDATION_ERROR);
      }
      const response = await this.authService.login({ email, password });
      res.status(STATUS_CODES.OK).send(response);
    } catch (error) {
      next(error);
    }
  };

  verifyEmailByToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      let { token } = req.query;
      if (!token || typeof token !== "string")
        throw new TokenError(ERROR_MESSAGES.INVALID_TOKEN);
      await emailService.verifyEmailByToken(token);
      res
        .status(STATUS_CODES.OK)
        .json({ message: "Email successfully verified!" });
    } catch (error) {
      next(error);
    }
  };
}

export const authController = new AuthController();
