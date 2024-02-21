import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../core/ui/header/header.component";
import {MenuComponent} from "../../core/ui/menu/menu.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MenuComponent,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public menuOpen: boolean = false;

  public toggleMenu(): void {
    console.log('toggleMenu')
    this.menuOpen = !this.menuOpen;
  }

}
