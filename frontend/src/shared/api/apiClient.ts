const API_BASE_URL = import.meta.env.VITE_API_URL;

class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const token = localStorage.getItem("token");
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
      const data = await response.json();
      console.error(data);
      const message = data.message;
      throw new Error(message);
    }
    return response.json();
  }

  post<T>(endpoint: string, data?: unknown) {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  get<T>(endpoint: string) {
    return this.request<T>(endpoint, {
      method: "GET",
    });
  }
}

export const apiClient = new ApiClient();
