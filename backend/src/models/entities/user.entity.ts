export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  job?: string | null;
  status: "unverified" | "active" | "blocked";
  created_at: Date;
  lastLogin_at: Date | null;
  verification_token: string | null;
}
