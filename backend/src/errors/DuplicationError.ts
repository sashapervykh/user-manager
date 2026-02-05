import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { ERROR_NAMES } from "../constants/errorNames.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { AppError } from "./AppError.js";

export class DuplicationError extends AppError {
  constructor() {
    super(ERROR_MESSAGES.DUPLICATION_ERROR, STATUS_CODES.CONFLICT);
    this.name = ERROR_NAMES.DUPLICATION_ERROR;
  }
}
