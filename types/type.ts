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

export interface BuyBackItem {
  batterySize: string;
  condition: string;
  quantity: number;
  reusableQty: number;
  buyPrice: number;
  inspectionNote: string;
  total: number;
}

export interface Customer {
  _id: string;
  name: string;
  phone: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface SaleForm {
  customerInfo: { name: string; phone: string };
  product: string;
  batteryCategory: string;
  quantity: number;
  salePrice: number;
  carNumber: string;
  oldBatteryPrice: number;
  totalPrice: number;
  rebuyOldBattery: boolean;
  paymentMethod: string;
  paidAmount: number;
  duePayment: number;
  isPaid: boolean;
  buybackData: BuyBackItem[];
}

interface buybackDetail {
  batteries: BuyBackItem[];
}

export interface Sale {
  _id: string;
  customer: Customer;
  carNumber: string;
  product: Product;
  batteryCategory: "new" | "second";
  quantity: number;
  salePrice: number;
  oldBatteryPrice: number;
  totalPrice: number;
  rebuyOldBattery: boolean;
  buyback: buybackDetail[];
  warrantyExpiry: string;
  createdBy: User;
  invoiceNumber: string;
  paymentMethod: "Cash" | "KBZ pay" | "Credit";
  paidAmount: number;
  duePayment: number;
  isPaid: boolean;
  saleDate: Date;
}

export interface RebuyBattery {
  batterySize: string;
  quantity: number;
  reusableQty: number;
  buyPrice: number;
  total: number;
}

export interface BuyBack {
  _id: string;
  buybackNumber: string;
  customer: Customer;
  batteries: RebuyBattery[];
  createdBy: User;
  sale: Sale;
  buyDate: Date;
}

export interface BuyBackForm {
  customerInfo: { name: string; phone: string };
  buybackData: RebuyBattery[];
}
