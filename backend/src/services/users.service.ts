import { database } from "@database/database.js";

class UsersService {
  private database = database;

  async getUsers(sortBy: string | undefined, sortOrder: string | undefined) {
    const users = await this.database.getAllUsers(sortBy, sortOrder);
    return users;
  }
}

export const usersService = new UsersService();
