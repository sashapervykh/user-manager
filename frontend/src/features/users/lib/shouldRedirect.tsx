import { ERRORS_TO_REDIRECT } from "./errorsToRedirect";

export function shouldRedirect(error: unknown) {
  if (!(error instanceof Error)) return false;
  const message = error.message;
  if (!ERRORS_TO_REDIRECT.includes(message)) return false;
  return true;
}
