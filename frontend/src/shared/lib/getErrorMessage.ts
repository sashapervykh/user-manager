export function getErrorMessage(error: unknown) {
  let message = "Unexpected error happened. Try again later.";
  if (error instanceof Error) {
    message = error.message;
  }
  return message;
}
