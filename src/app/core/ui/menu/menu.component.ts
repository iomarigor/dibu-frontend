import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

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
  protected isAuth: boolean = true;

  constructor(private authService: AuthService) {
    // this.isAuth = this.authService.isValidSession();
  }
}
