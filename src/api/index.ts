import { TODO_API } from "@/services/todos";

export interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const TodoApi = async (
  endpoint: string,
  options: RequestOptions = {}
) => {
  const url = `${TODO_API}${endpoint}`;

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    return response;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};
