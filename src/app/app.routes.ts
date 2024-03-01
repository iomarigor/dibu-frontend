import {Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {homesRoutes} from "./modules/home/home.routes";
import {AuthComponent} from "./modules/auth/auth.component";
import {authRoutes} from "./modules/auth/auth.routes";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: homesRoutes
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: authRoutes
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
