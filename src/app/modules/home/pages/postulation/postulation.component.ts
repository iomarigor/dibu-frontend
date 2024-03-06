import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {ModalComponent} from "../../../../core/ui/modal/modal.component";

@Component({
  selector: 'app-postulation',
  standalone: true,
  imports: [
    NgIf,
    ModalComponent
  ],
  templateUrl: './postulation.component.html',
  styleUrl: './postulation.component.scss'
})
export class PostulationComponent {

}
