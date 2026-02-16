import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { NavBarComponent } from './components/shared/nav-bar-component/nav-bar.component';
import { authGuard } from './guards/auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Authentication',
  },
  {
    path: 'dashboard',
    component: NavBarComponent,
    title: 'Dashboard',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./components/pages/dashboard/dashboard')
            .then(m => m.DashboardComponent),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./components/pages/page-projects/page-projects.component')
            .then(m => m.PageProjectsComponent),
        title: 'Projects',
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import('./components/pages/page-pricing/page-pricing.component')
            .then(m => m.PagePricingComponent),
        title: 'Pricing',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./components/pages/page-contact/page-contact.component')
            .then(m => m.PageContactComponent),
        title: 'Contact',
      },
      {
        path: 'profile',
        loadComponent: () =>
          import(
            './components/shared/user-profile-component/user-profile-component'
          ).then((m) => m.UserProfileComponent),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
