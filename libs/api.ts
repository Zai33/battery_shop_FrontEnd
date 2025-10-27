import { AuthResponse, SendOtpResponse } from "@/types/auth";
import axios from "axios";
import { handleApiError } from "./apiErrorHandler";

//create axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// login user
export const LoginUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const res = await api.post<AuthResponse>("/auth/login", {
      email,
      password,
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

// register user
export const SignUpUser = async (
  email: string,
  name: string,
  password: string,
  confirmPassword: string
): Promise<SendOtpResponse> => {
  try {
    const res = await api.post("/auth/register", {
      email,
      name,
      password,
      confirmPassword,
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

//verify otp
export const VerifyOtp = async (
  userId: string,
  otp: string
): Promise<AuthResponse> => {
  try {
    const res = await api.post("/auth/register/verify-otp", {
      userId,
      otp,
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

//resend otp
export const ResendOtp = async (userId: string): Promise<AuthResponse> => {
  try {
    const res = await api.post("/auth/register/resend-otp", {
      userId,
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};
