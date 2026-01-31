import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component/login-page/login.component';


export const routes: Routes = [
  {
    path: '',              
    redirectTo: 'login',  
    pathMatch: 'full'      
  },
  {
    path: 'login',         
    component: LoginComponent, 
    title: 'Вход в систему'   
  }
];
