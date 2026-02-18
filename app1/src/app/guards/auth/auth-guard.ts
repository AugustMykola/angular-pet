import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../../services';
import { map, take } from 'rxjs';
export const authGuard: CanActivateFn = () => {
  const router = inject(Router)
  const loginService =  inject(LoginService)
  
  return loginService.isAuth$.pipe(
    take(1),
    map(isLoggedIn => {
      console.log(isLoggedIn)
     return isLoggedIn ? true : router.createUrlTree(['/dashboard'])
    })
  );
}

