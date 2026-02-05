import { User } from "@models/entities/user.entity.js";

export function castFrontendType(user: User) {
  const {
    id,
    first_name: firstName,
    last_name: lastName,
    status,
    job,
    email,
    last_login_at: lastLoginAt,
  } = user;
  return { id, firstName, lastName, lastLoginAt, status, email, job };
}
