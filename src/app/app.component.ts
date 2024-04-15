import {Component, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {AppState} from "./core/store/app.reducers";
import {AuthService} from "./core/services/auth/auth.service";
import {controlAuth} from "./core/store/actions/auth.action";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthService]
})
export class AppComponent implements OnDestroy {
  title = 'dibuWebApp';
  private _subscriptions: Subscription = new Subscription();

  constructor(
    private _store: Store<AppState>,
    private _authService: AuthService,
    private _router: Router
  ) {
    this._store.dispatch(controlAuth({
      auth: {
        isAuth: this._authService.isValidSession(),
        session: this._authService.getSession(),
        token: this._authService.getToken(),
        role: this._authService.getRole()
      }
    }));

    this._store.select('auth').subscribe((auth) => {
      if (auth.isAuth) {
        this._subscriptions = new Subscription();
        this.timerVerifySession();
        return;
      }

      this._subscriptions.unsubscribe();
    });

    if (this._authService.getToken() !== '') this.verifySession();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  private timerVerifySession(): void {
    this._subscriptions.add(
      interval(60000)
        .subscribe(() => this.verifySession())
    );
  }

  private verifySession(): void {
    if (!this._authService.isValidSession()) {

      this._authService.logout();
      this._router.navigate(['/home/services']);
      return;
    }
  }

}
