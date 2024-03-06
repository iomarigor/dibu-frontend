import { Component } from '@angular/core';
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {NgIf} from "@angular/common";
import {CdkAccordionItem} from "@angular/cdk/accordion";
import {IAnnouncement} from "../../../../core/models/announcement";
import {
  SECTIONS_REQUIREMENTS_ONE,
  SECTIONS_REQUIREMENTS_THREE,
  SECTIONS_REQUIREMENTS_TWO
} from "../../../../core/utils/statics/statics";

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [
    ModalComponent,
    NgIf,
    CdkAccordionItem
  ],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss'
})
export class AnnouncementComponent {
  protected openModal: boolean = false;
  protected view: string = 'create';
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
