const TOKEN_KEY = "token";

export const TOKEN_STORAGE = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (value: string) => localStorage.setItem(TOKEN_KEY, value),
  remove: () => localStorage.removeItem(TOKEN_KEY),
};
