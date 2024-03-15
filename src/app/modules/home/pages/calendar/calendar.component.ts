import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-calendar',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

}
