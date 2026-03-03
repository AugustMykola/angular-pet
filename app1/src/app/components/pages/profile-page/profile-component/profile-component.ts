import { Component, inject } from '@angular/core';
import { MainInfo } from './main-info/main-info';
import { LoginService } from '../../../../services';
import { User } from '../../../../models';
import { ProfileNavigation } from '../profile-navigation/profile-navigation';
@Component({
  selector: 'app-profile-component',
  imports: [MainInfo, ProfileNavigation],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.scss',
})
export class ProfileComponent {
  private readonly loginService = inject(LoginService);

  user: User | null = this.loginService.getCurrentUser();
}
