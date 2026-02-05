import nodemailer from "nodemailer";
import { ENV } from "./env.js";

export const transporter = nodemailer.createTransport({
  service: ENV.MAIL_SERVICE,
  auth: {
    user: ENV.MAIL_ADDRESS,
    pass: ENV.MAIL_PASSWORD,
  },
});
