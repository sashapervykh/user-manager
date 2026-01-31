import { User } from "@models/entities/user.entity.js";

export type UserCreateDTO = Omit<User, "last_login_at" | "created_at">;
