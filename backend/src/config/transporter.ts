import nodemailer from "nodemailer";
import { ENV } from "./env.js";

export const transporter = nodemailer.createTransport({
  port: ENV.MAIL_PORT,
  host: ENV.MAIL_HOST,
  secure: false,
  auth: {
    user: ENV.MAIL_ADDRESS,
    pass: ENV.MAIL_PASSWORD,
  },
});
