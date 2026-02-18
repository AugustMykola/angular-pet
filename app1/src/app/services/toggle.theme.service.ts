import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'app-dark-mode';
  private darkMode = signal<boolean>(this.loadTheme());

  constructor() {
    this.applyTheme();
  }

  isDarkMode(): boolean {
    return this.darkMode();
  }

  toggleTheme(): void {
    this.darkMode.update(val => !val);
    this.saveTheme(this.darkMode());
    this.applyTheme();
  }

  applyTheme(): void {
    const htmlElement = document.documentElement;
    if (this.darkMode()) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  private saveTheme(isDark: boolean): void {
    localStorage.setItem(this.THEME_KEY, JSON.stringify(isDark));
  }

  private loadTheme(): boolean {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return true;
  }
}