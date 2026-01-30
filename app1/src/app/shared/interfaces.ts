export interface User {
  email: string;
  password: string;
  name: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
  user?: User;
}
