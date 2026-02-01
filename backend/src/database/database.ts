import pool from "@config/db.js";
import { DuplicationError } from "@errors/DuplicationError.js";
import { UserCreateDTO } from "@models/dtos/UserCreateDto.js";
import { User } from "@models/entities/user.entity.js";
import { DatabaseError } from "pg";

class Database {
  private pool = pool;

  async createUser(user: UserCreateDTO) {
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

  async getUserByEmail(email: string) {
    const query = `
  SELECT id, first_name, last_name, email, password_hash, job, status, created_at, last_login_at
  FROM users 
  WHERE email = $1`;
    const result = await this.pool.query<User>(query, [email]);
    return result.rows[0];
  }
}

export const database = new Database();
