import pool from "@config/db.js";
import { DatabaseError } from "@errors/DatabaseError.js";
import { User } from "@models/entities/user.entity.js";

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
      console.log("4");
      const query = `
  INSERT INTO users (first_name, last_name, email, password_hash, job, status, verification_token)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;
`;
      const values = [
        first_name,
        last_name,
        email,
        password_hash,
        job ?? null,
        status,
        verification_token,
      ];
      const result = await this.pool.query(query, values);
      return result;
    } catch (error) {
      console.log(error);
      throw new DatabaseError("Database Error");
    }
  }
}

export const database = new Database();
