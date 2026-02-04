export async function getUsers() {
  const users = await fetch(`${import.meta.env.VITE_API_URL}/users`);
  return users;
}
