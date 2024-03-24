import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {AppState} from "./core/store/app.reducers";
import {AuthService} from "./core/services/auth/auth.service";
import {controlAuth} from "./core/store/actions/auth.action";
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive, NgIdleKeepaliveModule} from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, NgIdleKeepaliveModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthService, Idle, Keepalive]
})
export class AppComponent implements OnInit {
  title = 'dibuWebApp';
  idleState = "NOT_STARTED";
  private countdown: any = null;
  private lastPing: any = null;

  constructor(
    private _store: Store<AppState>,
    private _authService: AuthService,
    private idle: Idle,
    cd: ChangeDetectorRef
  ) {
    this._store.dispatch(controlAuth({
      auth: {
        isAuth: this._authService.isValidSession(),
        session: this._authService.getSession(),
        token: this._authService.getToken()
      }
    }));


  }


  ngOnInit(): void {

  }

}
