import { transporter } from "../config/transporter.js";
import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { database } from "../database/database.js";
import { TokenError } from "../errors/TokenError.js";
import { ENV } from "../config/env.js";
import { gmail } from "../config/gmail.js";

class EmailService {
  async sendVerificationEmail(
    email: string,
    name: string,
    verificationUrl: string,
  ) {
    try {
      const emailLines = [
        `From: ${ENV.MAIL_ADDRESS}`,
        `To: ${email}`,
        `Subject: Registration confirmation`,
        "Content-Type: text/html; charset=UTF-8",
        "",
        `<p><b>Hello, ${name}</b><p>
        <p>Glad you're join us!</p>
        <p><a href=${verificationUrl}>Click thi link to verify your email</a></p>`,
      ];

      const mailText = emailLines.join("\r\n").trim();
      const base64EncodedEmail = Buffer.from(mailText)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
      const res = await gmail.users.messages.send({
        userId: "me",
        requestBody: {
          raw: base64EncodedEmail,
        },
      });
    } catch (err) {
      console.error("Error while sending mail", err);
    }
  }

  async verifyEmailByToken(token: string) {
    const updatedRows = await database.updateUserStatus(token);
    if (!updatedRows) throw new TokenError(ERROR_MESSAGES.INVALID_TOKEN);
  }
}

export const emailService = new EmailService();
