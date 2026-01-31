import { User } from "@models/entities/user.entity.js";

export type UserRegisterDto = Omit<
  User,
  | "id"
  | "password_hash"
  | "status"
  | "created_at"
  | "last_login_at"
  | "verification_token"
> & { password: string };
