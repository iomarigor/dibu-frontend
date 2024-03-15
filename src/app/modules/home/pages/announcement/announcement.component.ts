import {Component, OnDestroy} from '@angular/core';
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {DatePipe, NgIf} from "@angular/common";
import {CdkAccordionItem} from "@angular/cdk/accordion";
import {IAnnouncement} from "../../../../core/models/announcement";
import {
  SECTIONS_REQUIREMENTS_ONE,
  SECTIONS_REQUIREMENTS_THREE,
  SECTIONS_REQUIREMENTS_TWO
} from "../../../../core/utils/statics/statics";
import {ManagerService} from "../../../../core/services/manager/manager.service";
import {Subscription} from "rxjs";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [
    ModalComponent,
    NgIf,
    CdkAccordionItem,
    BlockUiComponent,
    DatePipe
  ],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
  providers: [ManagerService, ToastService]
})
export class AnnouncementComponent implements OnDestroy {
  private _subscriptions: Subscription = new Subscription();
  protected openModal: boolean = false;
  protected view: string = 'list';
  protected announcements: IAnnouncement[] = [];
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
  protected titleModal: string = 'Creación de requisito';
  protected isLoad: boolean = false;

  constructor(
    private _managerService: ManagerService,
    private _toastService: ToastService
  ) {
    this._getAnnouncement();
  }


  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _getAnnouncement() {

    this.isLoad = true;
    this._subscriptions.add(
      this._managerService.getAnnouncement().subscribe({
        next: (res) => {
          this.isLoad = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: 'No se pudo obtener el listado de convocatorias, intente nuevamente'});
            return;
          }

          this.announcements = res.detalle;
        },
        error: (error) => {
          console.error(error);
          this._toastService.add({type: 'error', message: 'Error al obtener la convocatoria'});
          this.isLoad = false;
        }
      })
    );
  }
}
