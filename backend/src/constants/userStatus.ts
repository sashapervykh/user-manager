import { UserStatus } from "@models/types/userStatus.type.js";

export const USER_STATUS: { [key: string]: UserStatus } = {
  active: "active",
  blocked: "blocked",
  unverified: "unverified",
};
