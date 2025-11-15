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

export interface CreateSupplier {
  _id: string;
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
