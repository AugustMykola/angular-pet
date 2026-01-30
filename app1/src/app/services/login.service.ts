import { Injectable } from '@angular/core';
import { User, LoginResult } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private mockUsers: User[] = [
    {
      email: 'user@example.com',
      password: 'password123',
      name: 'ivan name'
    },
    {
      email: 'admin@example.com', 
      password: 'admin456',
      name: 'admin'
    },
    {
      email: 'test@test.com',
      password: 'test',
      name: 'test user'
    }
  ];

  private currentUser: User | null = null;

  constructor() { }

 async login(email: string, password: string): Promise<LoginResult> {
  await new Promise(resolve => setTimeout(resolve, 1000));
    const user = this.mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.currentUser = user;
      return {
        success: true,
        message: `Welcome, ${user.name}!`,
        user: user
      };
    } else {
      return {
        success: false,
        message: 'Invalid email or password'
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
