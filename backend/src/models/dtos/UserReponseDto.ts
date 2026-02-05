import { User } from "@models/entities/user.entity.js";

export type UserResponseDto = Omit<
  User,
  "password_hash" | "verification_token"
>;
