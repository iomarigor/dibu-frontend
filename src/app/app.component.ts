import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {AppState} from "./core/store/app.reducers";
import {AuthService} from "./core/services/auth/auth.service";
import {controlAuth} from "./core/store/actions/auth.action";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthService]
})
export class AppComponent {
  title = 'dibuWebApp';

  constructor(
    private _store: Store<AppState>,
    private _authService: AuthService
  ) {
    this._store.dispatch(controlAuth({
      auth: {
        isAuth: this._authService.isValidSession(),
        session: this._authService.getSession(),
        token: this._authService.getToken()
      }
    }));
  }

}
