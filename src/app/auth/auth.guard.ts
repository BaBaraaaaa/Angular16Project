import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/user/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
 if( inject(AuthService).getRoles() === 'Admin') return true;
 inject(Router).navigateByUrl('')
  return false;
};
