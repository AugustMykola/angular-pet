import { Injectable } from '@angular/core';
import { User, LoginResult } from '../models';
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";
import { inject } from '@angular/core';

const CACHED_USER = 'currentUser'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private isLoggedIn = new BehaviorSubject(false)
 public isAuth$ = this.isLoggedIn.asObservable()
 private router = inject(Router)

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

  constructor() {
    const cachedUser = this.getCachedUser();
    if (cachedUser) {
      this.currentUser = cachedUser;
      this.isLoggedIn.next(true);
    }
  }

  async login(email: string, password: string): Promise<LoginResult> {
    if (this.getCurrentUser()) {
      this.router.navigate(['/dashboard']);
      return {
        success: true,
        message: 'Session already active, redirecting...'
      };
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    const user = this.mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.isLoggedIn.next(true)
      this.currentUser = user;
      this.setCachedUser(user)
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
    localStorage.removeItem(CACHED_USER)
    this.isLoggedIn.next(false)
    this.router.navigate(['/login'])
  }

  getCurrentUser(): User | null {
    return this.currentUser || this.getCachedUser()
  }

  private getCachedUser(): User | null {
    const forParse = localStorage.getItem(CACHED_USER)
    return forParse ? JSON.parse(forParse) : null
  }

  private setCachedUser(user: User): void {
    const { password, ...safeUser } = user;
    const userString = JSON.stringify(safeUser)
    localStorage.setItem(CACHED_USER, userString)
  }
}
