import { UserStatus } from "@models/types/userStatus.type.js";

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  job?: string | null;
  status: UserStatus;
  created_at: Date;
  last_login_at: Date | null;
  verification_token: string | null;
}
