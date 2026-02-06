import dotenv from "dotenv";
import { ENV_NAMES } from "../constants/envNames.js";

dotenv.config();

function checkEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable ${name}`);
  }
  return value;
}

export const ENV = {
  JWT_SECRET: checkEnv(ENV_NAMES.JWT_SECRET),
  JWT_EXPIRES_IN: Number(checkEnv(ENV_NAMES.JWT_EXPIRES_IN)),
  SALTS_ROUNDS: Number(checkEnv(ENV_NAMES.SALTS_ROUNDS)),
  DB_URL: checkEnv(ENV_NAMES.DB_URL),
  NODE_ENV: checkEnv(ENV_NAMES.NODE_ENV),
  FRONTEND_SOURCE: checkEnv(ENV_NAMES.FRONTEND_SOURCE),
  MAIL_PASSWORD: checkEnv(ENV_NAMES.MAIL_PASSWORD),
  MAIL_ADDRESS: checkEnv(ENV_NAMES.MAIL_ADDRESS),
  MAIL_SERVICE: checkEnv(ENV_NAMES.MAIL_SERVICE),
};
