import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  providers: [AuthService]
})
export class MenuComponent {
  protected isAuth: boolean = false;

  constructor(private _store: Store<AppState>) {
    this._store.select('auth').subscribe((auth) => {
      this.isAuth = auth.isAuth;
    });
  }
}
