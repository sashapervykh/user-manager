import pool from "@config/db.js";

class Database {
  private pool = pool;

  async register() {
    const query = `
  INSERT INTO users (first_name, last_name, email, password_hash, job, status)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
`;

    const values = ["Alex", "Perv", "bb@bb.bb", "aaaaa", "aaaa", "unverified"];

    const result = await this.pool.query(query, values);
    return result;
  }
}

export const database = new Database();
