import { Component, inject } from '@angular/core';
import { MainInfo } from './main-info/main-info';
import { LoginService } from '../../../../services';
import { User } from '../../../../models';
import { ProfileNavigation } from '../profile-navigation/profile-navigation';
import { PersonalInformation } from './pesonal-information/personal-information';
import { MENU_ITEMS } from '../../../../mocks/nav-menu.mock';
import { PassInformation } from './pass-information/pass-information'
@Component({
  selector: 'app-profile-component',
  imports: [MainInfo, ProfileNavigation, PersonalInformation, PassInformation],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.scss',
})
export class ProfileComponent {
  private readonly loginService = inject(LoginService);

  user: User | null = this.loginService.getCurrentUser();

  menuItems = MENU_ITEMS;
  currentItem = 'profile';

  setActiveItem(id: string) {
    this.currentItem = id;
  }
}
