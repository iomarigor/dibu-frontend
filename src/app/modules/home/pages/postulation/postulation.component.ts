import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {CdkAccordionItem} from "@angular/cdk/accordion";
import {IAnnouncement} from "../../../../core/models/announcement";
import {
  SECTIONS_REQUIREMENTS_ONE,
  SECTIONS_REQUIREMENTS_THREE,
  SECTIONS_REQUIREMENTS_TWO
} from "../../../../core/utils/statics/statics";

@Component({
  selector: 'app-postulation',
  standalone: true,
  imports: [
    NgIf,
    ModalComponent,
    CdkAccordionItem
  ],
  templateUrl: './postulation.component.html',
  styleUrl: './postulation.component.scss'
})
export class PostulationComponent {

  protected showModal: boolean = false;
  protected view: string = 'list';
  protected announcement: IAnnouncement = {
    nombre: '',
    convocatoria_servicio: [],
    fecha_fin: '',
    fecha_inicio: '',
    seciones: [
      {
        descripcion: 'Datos personales',
        requisitos: SECTIONS_REQUIREMENTS_ONE
      },
      {
        descripcion: 'Solicitan por primera vez',
        requisitos: SECTIONS_REQUIREMENTS_TWO
      },
      {
        descripcion: 'Documentos solicitados',
        requisitos: SECTIONS_REQUIREMENTS_THREE
      }
    ],
  };
}
