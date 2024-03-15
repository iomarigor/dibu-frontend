import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {AuthInterceptorService} from "./core/services/interceptors/auth.interceptor";
import {provideStore} from '@ngrx/store';
import {appReducers} from "./core/store/app.reducers";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(withInterceptorsFromDi()), {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, provideStore(appReducers)]
};
