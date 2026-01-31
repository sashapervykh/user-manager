import { AppError } from "./AppError.js";

export class DatabaseError extends AppError {
  constructor(message: string, statusCode?: number) {
    super(message, statusCode);
    this.name = "Database Error";
  }
}
