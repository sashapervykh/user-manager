import crypto from "crypto";

import bcrypt from "bcrypt";
import { database } from "@database/database.js";
import { UserRegisterDto } from "@models/dtos/UserRegisterDto.js";

class AuthService {
  private database = database;

  async register(registerUserDto: UserRegisterDto) {
    const { password } = registerUserDto;
    console.log("1");
    const password_hash = await this.getPasswordHash(password);
    console.log("2");
    const verification_token = this.getVerificationToken();
    console.log("3");
    return await this.database.createUser({
      ...registerUserDto,
      status: "unverified",
      password_hash,
      verification_token,
    });
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
