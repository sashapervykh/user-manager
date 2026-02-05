import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { ERROR_NAMES } from "../constants/errorNames.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { AppError } from "./AppError.js";

export class AuthenticationError extends AppError {
  constructor() {
    super(ERROR_MESSAGES.AUTHENTICATION_ERROR, STATUS_CODES.UNAUTHORIZED);
    this.name = ERROR_NAMES.AUTHENTICATION_ERROR;
  }
}
