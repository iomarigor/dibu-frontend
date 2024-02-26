import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth/auth.service";

export const authGuard: CanActivateFn = (route, state) => {

  const _authService = inject(AuthService);
  const _router = inject(Router);

  if (_authService.isValidSession()) return true;

  _router.navigateByUrl('/auth/login');
  return false;
};
