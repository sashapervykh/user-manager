import { STATUS_CODES } from "@constants/statusCodes.js";
import { ERROR_NAMES } from "@constants/errorNames.js";

import { AppError } from "./AppError.js";

export class JwtTokenError extends AppError {
  constructor(message: string) {
    super(message, STATUS_CODES.UNAUTHORIZED);
    this.name = ERROR_NAMES.JWT_ERROR;
  }
}
