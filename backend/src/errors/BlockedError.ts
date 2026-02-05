import { ERROR_MESSAGES } from "@constants/errorMessages.js";
import { STATUS_CODES } from "@constants/statusCodes.js";
import { ERROR_NAMES } from "@constants/errorNames.js";

import { AppError } from "./AppError.js";

export class BlockedError extends AppError {
  constructor() {
    super(ERROR_MESSAGES.BLOCKED_ERROR, STATUS_CODES.FORBIDDEN);
    this.name = ERROR_NAMES.BLOCKED_ERROR;
  }
}
