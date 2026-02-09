import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);

  get userName(): string {
    return this.loginService.getCurrentUser()?.name ?? 'Гость';
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
