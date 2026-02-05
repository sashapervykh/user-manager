import { Pool } from "pg";

import { ENV } from "./env.js";

const pool = new Pool({
  connectionString: ENV.DB_URL,
  ssl: ENV.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

try {
  const client = await pool.connect();
  console.log("Database connected successfully");
  client.release();
} catch {
  console.error("Database connection failed");
}

export default pool;
