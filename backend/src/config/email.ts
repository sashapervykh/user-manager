import { ENV } from "./env.js";

type MAIL_SERVICE_KEYS =
  | "clientId"
  | "clientSecret"
  | "refreshToken"
  | "redirectUri"
  | "email";

export const emailConfig: Record<MAIL_SERVICE_KEYS, string> = {
  clientId: ENV.MAIL_CLIENT_ID,
  clientSecret: ENV.MAIL_CLIENT_SECRET,
  refreshToken: ENV.MAIL_REFRESH_TOKEN,
  redirectUri: ENV.GOOGLE_REDIRECT_URI,
  email: ENV.MAIL_ADDRESS,
};
