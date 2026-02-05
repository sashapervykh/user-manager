import type { User } from "../../../entities/user/model/types/user";

export function castTableUsers(users: User[]) {
  return users.map((user) => {
    const {
      id: key,
      firstName,
      lastName,
      status,
      job,
      email,
      lastLoginAt,
    } = user;
    return {
      key,
      name: firstName + " " + lastName,
      status,
      job: job ?? "N/A",
      email,
      lastLoginAt: lastLoginAt ? new Date(lastLoginAt).toLocaleString() : "-",
    };
  });
}
