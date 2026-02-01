import { STATUS_CODES } from "@constants/statusCodes.js";

import { AppError } from "./AppError.js";

export class DuplicationError extends AppError {
  constructor() {
    super("Email already exists", STATUS_CODES.CONFLICT);
    this.name = "Duplication Error";
  }
}
