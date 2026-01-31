import { database } from "@database/database.js";

class AuthController {
  async register() {
    await database.register();
  }
}

export const authController = new AuthController();
