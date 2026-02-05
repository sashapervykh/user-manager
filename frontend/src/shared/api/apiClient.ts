import { handleApiErrors } from "../lib/handleApiErrors";
import { TOKEN_STORAGE } from "../lib/tokenStorage";

const API_BASE_URL = import.meta.env.VITE_API_URL;

class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const token = TOKEN_STORAGE.get();
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });
    if (!response.ok) {
      await handleApiErrors(response);
    }
    if (response.status === 204) {
      return {} as T;
    }
    return response.json();
  }

  post<T>(endpoint: string, data?: unknown) {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  put<T>(endpoint: string, data?: unknown) {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  get<T>(endpoint: string) {
    return this.request<T>(endpoint, {
      method: "GET",
    });
  }
  delete<T>(endpoint: string, data?: unknown) {
    return this.request<T>(endpoint, {
      method: "DELETE",
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient();
