export async function handleApiErrors(response: Response) {
  const data = await response.json();
  let message = "Unexpected internal error. Try again later.";
  if (
    data &&
    typeof data === "object" &&
    "message" in data &&
    typeof data.message === "string"
  ) {
    message = data.message;
  }
  throw new Error(message);
}
