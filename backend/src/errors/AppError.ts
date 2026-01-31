export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number | undefined = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
