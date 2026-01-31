import { STATUS_CODES } from "@constants/statusCodes.js";

export class AppError extends Error {
  statusCode: number;

  constructor(
    message = "Unknown internal error",
    statusCode = STATUS_CODES.INTERNAL_ERROR,
  ) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
