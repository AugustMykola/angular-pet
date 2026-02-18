export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  location: string;
  country: string;
  phoneNumber: string;
  avatar?: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
  user?: User;
}

