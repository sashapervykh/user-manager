import { database } from "@database/database.js";
import { castFrontendType } from "@middlewares/castFrontendType.js";

class UsersService {
  private database = database;

  async getUsers(sortBy: string | undefined, sortOrder: string | undefined) {
    const users = await this.database.getAllUsers(sortBy, sortOrder);
    return users.map((user) => castFrontendType(user));
  }

  async blockUsers(userIds: string[]) {
    await this.database.blockUsers(userIds);
  }

  async deleteUsers(userIds: string[]) {
    await this.database.deleteUsers(userIds);
  }

  async deleteUnverified() {
    await this.database.deleteUnverified();
  }

  async unblockUsers(userIds: string[]) {
    await this.database.unblockUsers(userIds);
  }
}

export const usersService = new UsersService();
