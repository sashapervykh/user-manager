export const API_ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    VERIFY_EMAIL: "/auth/email-verification?token=",
  },
  USERS: {
    MAIN: "/users/",
    ME: `/users/me`,
    BLOCK: "/users/block",
    UNBLOCK: "/users/unblock",
    DELETE_UNVERIFIED: "/users/unverified",
  },
};
