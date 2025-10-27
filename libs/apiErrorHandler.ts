import axios from "axios";

export const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const backendMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Request failed";

    throw new Error(backendMessage);
  }

  if (error instanceof Error) {
    throw new Error(error.message);
  }

  throw new Error("Network error. Please try again.");
};
