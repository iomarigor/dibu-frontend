import {Component, EventEmitter, Output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {ModalComponent} from "../modal/modal.component";
import {ISession} from "../../models/auth";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {controlAuth} from "../../store/actions/auth.action";
import {UserAgent} from "../../utils/functions/userAnget";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ModalComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() openSidenav: EventEmitter<void> = new EventEmitter<void>();

  protected isMobileDevice: boolean = UserAgent.IsMobileDevice();
  protected isAuth: boolean = false;
  protected session!: ISession;
  protected openModal: boolean = false;

  constructor(
    private authService: AuthService,
    private _router: Router,
    private _store: Store<AppState>
  ) {
    this._store.select('auth').subscribe((auth) => {
      this.isAuth = auth.isAuth;
    });
    this.session = this.authService.getSession();
  }

  public logout(): void {
    this.authService.logout();
    this._store.dispatch(controlAuth({auth: {isAuth: false, session: null, token: '', role: 0}}));
    this._router.navigateByUrl('/home/services');
    this.openModal = false;
  }
}
