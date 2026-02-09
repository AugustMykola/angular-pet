import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ThemeToggleDirective } from '../../../directives/theme-toggle.directive';
import { ThemeService } from '../../../services/toggle.theme.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ThemeToggleDirective,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly themeService = inject(ThemeService);
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);

  checked1 = signal<boolean>(false);
  isDark = () => this.themeService.isDarkMode();

  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  async onLogin(): Promise<void> {
    if (!this.email || !this.password) {
      this.errorMessage = 'Enter email and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const result = await this.loginService.login(this.email, this.password);

    this.isLoading = false;

    if (result.success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = result.message;
    }
  }
}