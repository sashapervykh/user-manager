import { gmail_v1, google } from "googleapis";
import { emailConfig } from "./email.js";

const OAuth2 = google.auth.OAuth2;
const id = emailConfig.clientId;
const secret = emailConfig.clientSecret;
const redirectURI = emailConfig.redirectUri;
const refreshToken = emailConfig.refreshToken;

const myOAuth2Client = new OAuth2(id, secret, redirectURI);
myOAuth2Client.setCredentials({
  refresh_token: refreshToken,
});

export const gmail: gmail_v1.Gmail = google.gmail({
  version: "v1",
  auth: myOAuth2Client,
});
