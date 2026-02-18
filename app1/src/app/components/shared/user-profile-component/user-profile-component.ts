import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/login.service';
import { User } from '../../../models/interfaces';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user-profile-component',
  standalone: true,
  imports: [CommonModule, AvatarModule, CardModule,],
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.scss',
})
export class UserProfileComponent {
  private loginService = inject(LoginService);

  get user(): User | null {
    return this.loginService.getCurrentUser();
  }

  getInitials(): string {
    const user = this.user;
    if (user?.firstName) {
      const parts = user.firstName.split(' ');
      if (parts.length >= 2) {
        return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
      }
      return user.firstName.charAt(0).toUpperCase();
    }
    return '?';
  }
}
