import { User } from "@models/entities/user.entity.js";

export type UserRegisterDto = Omit<
  User,
  | "id"
  | "passwordHash"
  | "status"
  | "createdAt"
  | "lastLoginAt"
  | "verificationToken"
> & { password: string };
