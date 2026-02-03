import { USER_STATUS } from "@constants/userStatus.js";

export type UserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];
