import { Request, Response } from "express";
import { RegisterUserDto } from "@models/RegisterUserDto.js";
import { authService } from "@services/auth.service.js";

class AuthController {
  authService = authService;

  register = async (req: Request<{}, {}, RegisterUserDto>, res: Response) => {
    try {
      const { email, password, first_name, last_name } = req.body;

      if (!email || !password || !first_name || !last_name) {
        res.send(400).send({
          message: `Not all required field was provided! Check first name, last name, email and password once again.`,
        });
      }

      const user = authService.register(req.body);

      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res
        .status(409)
        .json({ message: "User was already existed", error: error });
    }
  };
}

export const authController = new AuthController();
