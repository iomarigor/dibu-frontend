import {Component, EventEmitter, Output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {ModalComponent} from "../modal/modal.component";
import {ISession} from "../../models/auth";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ModalComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() openSidenav: EventEmitter<void> = new EventEmitter<void>();

  protected isAuth: boolean = false;
  protected session!: ISession;
  protected openModal: boolean = false;

  constructor(
    private authService: AuthService,
    private _router: Router
  ) {
    this.isAuth = this.authService.isValidSession();
    this.session = this.authService.getSession();
  }

  public logout(): void {
    this.authService.logout();
    this._router.navigateByUrl('/home/services');
    this.openModal = false;
  }
}
