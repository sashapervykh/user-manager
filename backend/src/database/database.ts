import pool from "@config/db.js";
import { DuplicationError } from "@errors/DuplicationError.js";
import { User } from "@models/entities/user.entity.js";
import { DatabaseError } from "pg";

class Database {
  private pool = pool;

  async createUser(user: User) {
    try {
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
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING id, first_name, last_name, email, job, status, created_at, last_login_at;
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
      return result.rows[0];
    } catch (error) {
      if (error instanceof DatabaseError && error.code === "23505") {
        throw new DuplicationError();
      }
      throw error;
    }
  }
}

export const database = new Database();
