import { Injectable } from '@angular/core';
import { User, LoginResult } from '../shared';
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";
import { inject } from '@angular/core';

const CASHED_USER = 'currentUser'

@Injectable({
  
  providedIn: 'root'
})
export class LoginService {
 private isLoggedIn = new BehaviorSubject(false)
 public isAuth$ = this.isLoggedIn.asObservable()
 private  router = inject(Router)

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

  constructor() {  }

  async login(email: string, password: string): Promise<LoginResult> {
    if (this.getCurrentUser()){
      return {
        success:false, 
        message:'Current session is vallid'
      } 
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    const user = this.mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.isLoggedIn.next(true)
      this.currentUser = user;
      this.setCashedUser(user)
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
    localStorage.removeItem(CASHED_USER)
    this.isLoggedIn.next(false)
    this.router.navigate(['/login'])
  }

  

  getCurrentUser(): User | null {
    return this.getCashedUser() || this.currentUser
  }
  private getCashedUser(){
    const forParse = localStorage.getItem(CASHED_USER) 
    
    return forParse ? JSON.parse(forParse) : null
  }
  private setCashedUser(user:User): void {
   const userString = JSON.stringify(user)
     localStorage.setItem(CASHED_USER,userString)
  }
}
