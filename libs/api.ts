import {
  AuthResponse,
  CreateProductType,
  CreateSupplierType,
  Product,
  ProductResponse,
  Sale,
  SaleForm,
  SendOtpResponse,
  Supplier,
} from "@/types/type";
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
  token: string,
  page: number
): Promise<ProductResponse> => {
  try {
    const res = await api.get(`/product?page=${page}`, {
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

//update product by id
export const UpdateProductById = async (
  id: string,
  data: CreateProductType,
  token: string
) => {
  try {
    const res = await api.patch(`/product/update/${id}`, data, {
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

//delete product by id
export const DeleteProductById = async (id: string, token: string) => {
  try {
    const res = await api.delete(`/product/delete/${id}`, {
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

//get all sales
export const GetAllSales = async (token: string, page: number) => {
  try {
    const res = await api.get(`/sale?page=${page}&limit=10`, {
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

//create sale
export const SaleCreate = async (token: string, saleData: SaleForm) => {
  try {
    const res = await api.post(`/sale/create`, saleData, {
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

//get all sale
export const GetAllSale = async (token: string, page: number) => {
  try {
    const res = await api.get(`/sale?page=${page}`, {
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

//get sale by id
export const GetSaleById = async (token: string, id: string) => {
  try {
    const res = await api.get(`/sale/${id}`, {
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

//get all buybacks
export const GetAllBuyBacks = async (token: string, page: number) => {
  try {
    const res = await api.get(`/buy-back?page=${page}`, {
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

//get buyback by id
export const GetBuyBackById = async (token: string, id: string) => {
  try {
    const res = await api.get(`/buy-back/${id}`, {
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

export const SearchProductByName = async (token: string, keyword: string) => {
  try {
    const res = await api.get(`/product/search?key=${keyword}`, {
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
