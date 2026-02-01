import { STATUS_CODES } from "@constants/statusCodes.js";

import { AppError } from "./AppError.js";

export class ValidationError extends AppError {
  constructor() {
    super(
      "Not all required fields are provided. First name, last name, email and password are necessary.",
      STATUS_CODES.BAD_REQUEST,
    );
    this.name = "Validation Error";
  }
}
