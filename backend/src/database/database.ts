import pool from "@config/db.js";
import { User } from "@models/entities/user.entity.js";

class Database {
  private pool = pool;

  async createUser(user: User) {
    const {
      first_name,
      last_name,
      email,
      password_hash,
      job,
      status,
      verification_token,
    } = user;
    const query = `
  INSERT INTO users (first_name, last_name, email, password_hash, job, status, verification_token)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
`;
    const values = [
      first_name,
      last_name,
      email,
      password_hash,
      job,
      status,
      verification_token,
    ];
    const result = await this.pool.query(query, values);
    return result;
  }
}

export const database = new Database();
