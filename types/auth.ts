export const batteryTypes = [
  "Liquid",
  "Maintenance Free",
  "Tubular",
  "LiFePO4",
  "AGM",
  "Gel",
  "Other",
];

export interface LoginResult {
  _id: string;
  name: string;
  email: string;
  phone_number?: string;
  role: string;
  token: string;
}

export interface AuthResponse {
  con: boolean;
  message: string;
  result: LoginResult;
}

export interface SendOtpResponse {
  con: boolean;
  message: string;
  userId: string;
}

export interface CreateSupplierType {
  companyName: string;
  contact: string;
  address: string;
  phone: string;
}

export interface Supplier {
  _id: string;
  companyName: string;
  contact: string;
  address: string;
  phone: string;
}

export interface Category {
  _id: string;
  type: string;
}

export interface Product {
  _id: string;
  name: string;
  type: string;
  brand: string;
  capacity: string;
  category: Category;
  supplier: Supplier;
  price: number;
  warrantyMonths: number;
  quantity: number;
}

export interface ProductResponse {
  con: boolean;
  message: string;
  currentPage: number;
  totalPages: number;
  totalCount: number;
  result: Product[];
}

export interface CreateProductType {
  name: string;
  type: string;
  brand: string;
  capacity: string;
  category: string;
  supplier: string;
  price: number;
  warrantyMonths: number;
  quantity: number;
}
