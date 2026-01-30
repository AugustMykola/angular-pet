import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private mockUsers: User[] = [
    {
      email: 'user@example.com',
      password: 'password123',
      name: 'Иван Иванов'
    },
    {
      email: 'admin@example.com', 
      password: 'admin456',
      name: 'Администратор'
    },
    {
      email: 'test@test.com',
      password: 'test',
      name: 'Тестовый пользователь'
    }
  ];

  private currentUser: User | null = null;

  constructor() { }

  login(email: string, password: string): LoginResult {
    const user = this.mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.currentUser = user;
      return {
        success: true,
        message: `Добро пожаловать, ${user.name}!`,
        user: user
      };
    } else {
      return {
        success: false,
        message: 'Неверный email или пароль'
      };
    }
  }

  logout(): void {
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
