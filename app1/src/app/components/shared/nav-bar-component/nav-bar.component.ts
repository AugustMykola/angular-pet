import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  private readonly loginService = inject(LoginService);

  menuItems: MenuItem[] = [];
  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/dashboard',
      },
      {
        label: 'Projects',
        icon: 'pi pi-folder',
        routerLink: '/dashboard/projects',
      },
      {
        label: 'Pricing',
        icon: 'pi pi-tag',
        routerLink: '/dashboard/pricing',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/dashboard/contact',
      },
    ];
  }

  logout(): void {
    this.loginService.logout();
  }
}
