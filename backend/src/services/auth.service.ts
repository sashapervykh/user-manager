import crypto from "crypto";

import bcrypt from "bcrypt";
import { database } from "@database/database.js";
import { UserRegisterDto } from "@models/dtos/UserRegisterDto.js";
import { USER_STATUS } from "@constants/userStatus.js";
import { UserLoginDto } from "@models/dtos/UserLoginDto.js";

class AuthService {
  private database = database;

  async register(registerUserDto: UserRegisterDto) {
    const { password, ...userData } = registerUserDto;
    const password_hash = await this.getPasswordHash(password);
    const verification_token = this.getVerificationToken();
    return await this.database.createUser({
      ...userData,
      status: USER_STATUS.unverified,
      password_hash,
      verification_token,
    });
  }

  async login(userLoginDto: UserLoginDto) {
    const { email, password } = userLoginDto;
    const user = await this.database.getUserByEmail(email);
    console.log(user);
  }

  private getVerificationToken() {
    return crypto.randomBytes(32).toString("hex");
  }

  private async getPasswordHash(password: string) {
    const saltsRounds = Number(process.env.SALTS_ROUNDS);
    return await bcrypt.hash(password, saltsRounds);
  }

  private async verifyPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export const authService = new AuthService();
