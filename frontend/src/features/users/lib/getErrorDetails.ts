import { getErrorMessage } from "../../../shared/lib/getErrorMessage";
import { shouldRedirect } from "./shouldRedirect";

export function getErrorDetails(error: unknown) {
  const message = getErrorMessage(error);
  const isRedirecting = shouldRedirect(error);
  return { message, isRedirecting };
}
