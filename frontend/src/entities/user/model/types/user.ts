export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  job?: string;
  status: "active" | "blocked" | "unverified";
  lastLoginAt: string | null;
}
