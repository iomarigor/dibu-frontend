import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth/auth.service";

export const authGuard: CanActivateFn = (route, state) => {

  const _authService = inject(AuthService);
  const _router = inject(Router);
  const session = _authService.getSession();
  const role: number[] = route.data['role'];

  const publicRoutes: string[] = [
    '/home/calendar',
    '/home/services',
    '/home/statistics-data',
    '/home/statues-regulations',
    '/home/postulation'
  ];

  if (publicRoutes.includes(state.url)) return true;

  if (_authService.isValidSession() && role.includes(session.id_level_user)) return true;

  _router.navigateByUrl('/auth/login');
  return false;
};
