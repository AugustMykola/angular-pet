import { Component, signal, input, output } from '@angular/core';
import { MENU_ITEMS } from '../../../../mocks/nav-menu.mock';

export interface MenuItem {
  id: string;
  label: string;
}
@Component({
  selector: 'app-profile-navigation',
  imports: [],
  templateUrl: './profile-navigation.html',
  styleUrl: './profile-navigation.scss',
})
export class ProfileNavigation {
  menuItems = input<MenuItem[]>([]);
  activeItem = input<string>('profile');

  activeItemChange = output<string>();

  emitActive(id: string) {
    this.activeItemChange.emit(id);
  }
}
