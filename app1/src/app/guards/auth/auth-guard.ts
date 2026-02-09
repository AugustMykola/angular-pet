import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../../services';
import { map,take } from 'rxjs';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loginService =  inject(LoginService)
  
  return loginService.isAuth$.pipe(
    map(isLoggedIn => {
      console.log(isLoggedIn)
     return isLoggedIn ? true : router.createUrlTree(['/login'])
    })
  );
  if (loginService){
    return true
  }
  else {
    router.navigate(['/login'])
    return false
  } 
};

