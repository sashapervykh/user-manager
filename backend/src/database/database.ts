import pool from "@config/db.js";
import { SORT_COLUMNS } from "@constants/sortColumns.js";
import { SORT_ORDER } from "@constants/sortOrder.js";
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

  async getAllUsers(
    sortBy = SORT_COLUMNS.LAST_LOGIN_AT,
    sortOrder = SORT_ORDER.DESC,
  ) {
    const safeSortColumn = Object.values(SORT_COLUMNS).includes(sortBy)
      ? sortBy
      : SORT_COLUMNS.LAST_LOGIN_AT;
    const safeSortOrder = Object.values(SORT_ORDER).includes(sortOrder)
      ? sortOrder
      : SORT_ORDER.DESC;
    const query = `
  SELECT id, first_name, last_name, email, job, status, created_at, last_login_at
  FROM users
  ORDER BY ${safeSortColumn} ${safeSortOrder}`;
    const result = await this.pool.query<User>(query);
    return result.rows;
  }

  async getUserById(id: string) {
    const query = `
  SELECT id, first_name, last_name, email, password_hash, job, status, created_at, last_login_at
  FROM users 
  WHERE id = $1`;
    const result = await this.pool.query<User>(query, [id]);
    return result.rows.length === 0 ? undefined : result.rows[0];
  }

  async getUserByEmail(email: string) {
    const query = `
  SELECT id, first_name, last_name, email, password_hash, job, status, created_at, last_login_at
  FROM users 
  WHERE email = $1`;
    const result = await this.pool.query<User>(query, [email]);
    return result.rows.length === 0 ? undefined : result.rows[0];
  }

  async updateLastLoginAt(id: string) {
    const query = `
  UPDATE USERS
  SET last_login_at = CURRENT_TIMESTAMP 
  WHERE id = $1
  RETURNING last_login_at`;
    const result = await this.pool.query<User>(query, [id]);
    return result.rows[0]?.last_login_at;
  }
}

export const database = new Database();
