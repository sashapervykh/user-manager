import crypto from "crypto";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { database } from "@database/database.js";
import { UserRegisterDto } from "@models/dtos/UserRegisterDto.js";
import { USER_STATUS } from "@constants/userStatus.js";
import { UserLoginDto } from "@models/dtos/UserLoginDto.js";
import { AuthenticationError } from "@errors/AuthenticationError.js";
import { BlockedError } from "@errors/BlockedError.js";
import { ENV } from "@config/env.js";

class AuthService {
  private database = database;

  async register(registerUserDto: UserRegisterDto) {
    const { password, ...userData } = registerUserDto;
    const password_hash = await this.getPasswordHash(password);
    const verification_token = this.getEmailToken();
    return await this.database.createUser({
      ...userData,
      status: USER_STATUS.UNVERIFIED,
      password_hash,
      verification_token,
    });
  }

  async login(userLoginDto: UserLoginDto) {
    const { email, password } = userLoginDto;
    const user = await this.database.getUserByEmail(email);
    if (!user) {
      throw new AuthenticationError();
    }
    const isCorrect = await this.verifyPassword(password, user.password_hash);
    if (!isCorrect) {
      throw new AuthenticationError();
    }
    if (user.status === USER_STATUS.BLOCKED) {
      throw new BlockedError();
    }
    const token = this.getJwtToken(user.id);
    return { user, token };
  }

  private getEmailToken() {
    return crypto.randomBytes(32).toString("hex");
  }

  private getJwtToken(userId: string) {
    const payload = { userId };
    const jwtToken = jwt.sign(payload, ENV.JWT_SECRET, {
      expiresIn: ENV.JWT_EXPIRES_IN,
    });
    return jwtToken;
  }

  private async getPasswordHash(password: string) {
    return await bcrypt.hash(password, ENV.SALTS_ROUNDS);
  }

  private async verifyPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export const authService = new AuthService();
