import { transporter } from "../config/transporter.js";
import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { database } from "../database/database.js";
import { TokenError } from "../errors/TokenError.js";

class EmailService {
  async sendVerificationEmail(
    email: string,
    name: string,
    verificationUrl: string,
  ) {
    try {
      await transporter.sendMail({
        from: "The App Team",
        to: email,
        subject: "Registration confirmation",
        html: `<p><b>Hello, ${name}</b><p>
        <p>Glad you're join us!</p>
        <p><a href=${verificationUrl}>Click thi link to verify your email</a></p>`, // HTML body
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
