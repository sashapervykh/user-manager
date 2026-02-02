import { ERROR_MESSAGES } from "@constants/errorMessages.js";
import { ValidationError } from "@errors/ValidationError.js";

export function validateUserIds(data: unknown) {
  if (!data) {
    throw new ValidationError(ERROR_MESSAGES.NO_USER_IDS_ERROR);
  }
  if (!Array.isArray(data)) {
    throw new ValidationError(ERROR_MESSAGES.INVALID_USER_IDS_ERROR);
  }
  const typedData = data.map((e) => {
    if (typeof e === "string") {
      return e;
    }
    throw new ValidationError(ERROR_MESSAGES.INVALID_USER_IDS_ERROR);
  });
  return typedData;
}
