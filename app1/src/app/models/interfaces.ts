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

export interface PricingPlan {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
  duration: string;
  shortDescription: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}