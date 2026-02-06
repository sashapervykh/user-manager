import { ERROR_NAMES } from "../constants/errorNames.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { AppError } from "./AppError.js";

export class TokenError extends AppError {
  constructor(message: string) {
    super(message, STATUS_CODES.UNAUTHORIZED);
    this.name = ERROR_NAMES.TOKEN_ERROR;
  }
}
