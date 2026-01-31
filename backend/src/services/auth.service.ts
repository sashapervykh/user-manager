import { database } from "@database/database.js";
import { RegisterUserDto } from "@models/RegisterUserDto.js";

class AuthService {
  private database = database;
  register(registerUserDto: RegisterUserDto) {
    return registerUserDto;
  }

  getPasswordHash() {}
}

export const authService = new AuthService();
