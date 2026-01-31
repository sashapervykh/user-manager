import { User } from "@models/entities/user.entity.js";

export type UserResponseDto = Omit<
  User,
  "passwordHash" | "verificationToken"
> & { id: string };
