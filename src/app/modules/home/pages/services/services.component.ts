import { Component } from '@angular/core';
import {Services} from "../../../../core/utils/statics/statics";
import {IServices} from "../../../../core/models/services";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  protected services: IServices[] = Services;

}
