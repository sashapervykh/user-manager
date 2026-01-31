import { database } from "@database/database.js";
import { UserRegisterDto } from "@models/dtos/UserRegisterDto.js";
import bcrypt from "bcrypt";

class AuthService {
  private database = database;

  async register(registerUserDto: UserRegisterDto) {
    const { password } = registerUserDto;
    const password_hash = await this.getPasswordHash(password);
    const verification_token = null;
    return await this.database.createUser({
      ...registerUserDto,
      status: "unverified",
      password_hash,
      verification_token,
    });
  }

  async getPasswordHash(password: string) {
    const saltsRounds = Number(process.env.SALTS_ROUNDS);
    return await bcrypt.hash(password, saltsRounds);
  }

  async verifyPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export const authService = new AuthService();
