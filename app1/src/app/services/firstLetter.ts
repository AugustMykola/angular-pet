import { Injectable, inject, signal } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class FirstLetterService {
  private readonly loginService = inject(LoginService);
  private _letter = signal<string>('A');
  readonly letter = this._letter
  constructor() {
    this.updateLetter();
    this.loginService.isAuth$.subscribe(() => {
      this.updateLetter();
    });
  }
  private updateLetter(): void {
    const user = this.loginService.getCurrentUser();
    const name = user?.firstName || user?.email;
    this._letter.set(name ? name.charAt(0).toUpperCase() : 'A');
  }


}