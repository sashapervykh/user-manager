import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

class EmailService {
  async sendEmail(email: string, name: string, verificationUrl: string) {
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
}

export const emailService = new EmailService();
