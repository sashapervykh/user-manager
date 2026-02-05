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
import { castFrontendType } from "@middlewares/castFrontendType.js";

class AuthService {
  private database = database;

  async register(registerUserDto: UserRegisterDto) {
    const {
      password,
      email,
      job,
      firstName: first_name,
      lastName: last_name,
    } = registerUserDto;
    const password_hash = await this.getPasswordHash(password);
    const verification_token = this.getEmailToken();
    const user = await this.database.createUser({
      first_name,
      last_name,
      email,
      job,
      status: USER_STATUS.UNVERIFIED,
      password_hash,
      verification_token,
    });
    const token = this.getJwtToken(user.id);
    return {
      user: castFrontendType(user),
      token: token,
    };
  }

  async login(userLoginDto: UserLoginDto) {
    const { email, password } = userLoginDto;
    const user = await this.database.getUserByEmail(email);
    if (!user) {
      throw new AuthenticationError();
    }
    const { password_hash } = user;
    const isCorrect = await this.verifyPassword(password, password_hash);
    if (!isCorrect) {
      throw new AuthenticationError();
    }
    if (user.status === USER_STATUS.BLOCKED) {
      throw new BlockedError();
    }
    const newLoginTime = await this.database.updateLastLoginAt(user.id);
    const token = this.getJwtToken(user.id);
    if (!newLoginTime) {
      throw new AuthenticationError();
    }
    user.last_login_at = newLoginTime;
    return {
      user: castFrontendType(user),
      token,
    };
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
