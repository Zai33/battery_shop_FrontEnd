import {
  AuthResponse,
  CreateProductType,
  CreateSupplierType,
  ProductResponse,
  SendOtpResponse,
  Supplier,
} from "@/types/auth";
import axios from "axios";
import { handleApiError } from "./apiErrorHandler";

//create axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
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

//get all categories
export const GetAllCategories = async (token: string) => {
  try {
    const res = await api.get("/category", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

//get all suppliers
export const GetAllSuppliers = async (token: string) => {
  try {
    const res = await api.get("/supplier", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

//create supplier
export const CreateNewSupplier = async (
  data: CreateSupplierType,
  token: string
) => {
  try {
    const res = await api.post("/supplier/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

//delete Supplier
export const DeleteSupplier = async (id: string, token: string) => {
  try {
    const res = await api.delete(`/supplier/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

//update Supplier
export const UpdateSupplier = async (
  id: string,
  data: Supplier,
  token: string
) => {
  try {
    const res = await api.put(`/supplier/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

// get all products
export const GetAllProducts = async (
  token: string
): Promise<ProductResponse> => {
  try {
    const res = await api.get("/product", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

//create new product
export const CreateNewProduct = async (
  data: CreateProductType,
  token: string
) => {
  try {
    const res = await api.post("/product/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};

//get product by id
export const GetProductById = async (id: string, token: string) => {
  try {
    const res = await api.get(`/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    handleApiError(error);
    throw error;
  }
};
