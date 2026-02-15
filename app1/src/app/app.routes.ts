import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { NavBarComponent } from './components/shared/nav-bar-component/nav-bar.component';
import { authGuard } from './guards/auth/auth-guard';
import { ProjectsComponent } from './components/shared/projects-component/projects-component';
import { PageOneComponent } from './components/pages/1/page-one.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },  {
    path: 'login',
    component: LoginComponent,
    title: 'Authentication',
  },
  {
    path: 'projects',
    component: PageOneComponent,
    title: 'Projects',
  },
  {
    path: 'dashboard',
    component: NavBarComponent,
    title: 'Dashboard',
    canActivate: [authGuard],    children: [      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./components/pages/dashboard/dashboard')
            .then(m => m.DashboardComponent),
      },      {
        path: 'pricing',
        loadComponent: () =>
          import('./components/shared/pricing-component/pricing-component')
            .then(m => m.PricingComponent),
      },      {
        path: 'contact-us',
        loadComponent: () =>
          import('./components/shared/contact-component/contact-component')
            .then(m => m.ContactComponent),
      },
      {
        path: 'projects',
        component: PageOneComponent,
        title: 'Projects',
      },
      {
        path: 'page-one',
        loadComponent: () =>
          import('./components/pages/1/page-one.component')
            .then(m => m.PageOneComponent),
        title: 'Page One',
      },
      {
        path: 'page-two',
        loadComponent: () =>
          import('./components/pages/2/page-two.component')
            .then(m => m.PageTwoComponent),
        title: 'Page Two',
      },
      {
        path: 'page-three',
        loadComponent: () =>
          import('./components/pages/3/page-three.component')
            .then(m => m.PageThreeComponent),
        title: 'Page Three',
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
