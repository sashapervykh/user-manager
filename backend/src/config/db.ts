import { Pool } from "pg";

import { ENV } from "./env.js";

const pool = new Pool({
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  database: ENV.DB_NAME,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
});

try {
  const client = await pool.connect();
  console.log("Database connected successfully");
  client.release();
} catch {
  console.error("Database connection failed");
}

export default pool;
