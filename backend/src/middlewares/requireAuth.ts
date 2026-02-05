import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { database } from "../database/database.js";
import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { JwtTokenError } from "../errors/JwtTokenError.js";
import { USER_STATUS } from "../constants/userStatus.js";
import { BlockedError } from "../errors/BlockedError.js";
import { AUTH_HEADER_START } from "../constants/authHeaderStart.js";
import { ENV } from "../config/env.js";

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const token = extractToken(req);
    const id = extractIdFromToken(token);
    const user = await database.getUserById(id);
    if (!user) {
      throw new JwtTokenError(ERROR_MESSAGES.NOT_EXIST);
    }
    if (user.status === USER_STATUS.BLOCKED) {
      throw new BlockedError();
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

function extractToken(req: Request) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith(AUTH_HEADER_START)) {
    throw new JwtTokenError(ERROR_MESSAGES.NO_TOKEN_ERROR);
  }
  const token = authHeader.split(" ")[1];
  return token;
}

function extractIdFromToken(token: string) {
  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    const id = getTypedId(decoded);
    return id;
  } catch {
    throw new JwtTokenError(ERROR_MESSAGES.INVALID_TOKEN);
  }
}

function getTypedId(decoded: unknown) {
  if (
    decoded &&
    typeof decoded === "object" &&
    "userId" in decoded &&
    typeof decoded.userId === "string"
  ) {
    return decoded.userId;
  }
  throw new JwtTokenError(ERROR_MESSAGES.INVALID_TOKEN);
}
