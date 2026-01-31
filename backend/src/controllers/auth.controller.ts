import { Request, Response } from "express";
import { UserRegisterDto } from "@models/dtos/UserRegisterDto.js";
import { authService } from "@services/auth.service.js";

class AuthController {
  authService = authService;

  register = async (req: Request<{}, {}, UserRegisterDto>, res: Response) => {
    try {
      const { email, password, first_name, last_name } = req.body ?? {};
      if (!email || !password || !first_name || !last_name) {
        res.status(400).send({
          message: `Not all required field was provided! Check first name, last name, email and password once again.`,
        });
        return;
      }
      const user = await authService.register(req.body);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res
        .status(409)
        .json({ message: "User was already existed", error: error });
    }
  };
}

export const authController = new AuthController();
