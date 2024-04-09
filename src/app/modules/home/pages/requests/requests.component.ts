import {Component, OnDestroy} from '@angular/core';
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {ManagerService} from "../../../../core/services/manager/manager.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {IRequest, IUpdateService} from "../../../../core/models/requests";
import {DatePipe, KeyValuePipe, NgIf} from "@angular/common";
import {CdkAccordionItem} from "@angular/cdk/accordion";
import {SafePipePipe} from "../../../../core/pipes/safe-pipe.pipe";

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [
    BlockUiComponent,
    ModalComponent,
    ReactiveFormsModule,
    ToastComponent,
    NgIf,
    CdkAccordionItem,
    KeyValuePipe,
    DatePipe,
    SafePipePipe
  ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
  providers: [ToastService, ManagerService]
})
export class RequestsComponent implements OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  protected isLoading: boolean = false;
  protected requests: IRequest[] = [];
  protected view: string = 'list';
  protected student!: IRequest;
  protected showModal: boolean = false;
  protected fileUrl: string = '';
  protected alertModal: boolean = false;
  protected action: string = '';
  private serviceID: number = 0;

  constructor(
    private _toastService: ToastService,
    private _managerService: ManagerService
  ) {
    this.getRequests();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  private getRequests(): void {
    this.isLoading = true;

    this._subscriptions.add(
      this._managerService.getRequests().subscribe({
        next: (res) => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: res.msg});
            return;
          }

          this.requests = res.detalle;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.isLoading = false;
          this._toastService.add({
            type: 'error',
            message: 'No se pudo obtener el listado de solicitantes, intente de nuevo'
          });
        }
      })
    );
  }

  protected getStudentRequest(student: IRequest): void {
    this.isLoading = true;

    console.log(student)

    this._subscriptions.add(
      this._managerService.getStudentRequest(student.id).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'info', message: res.msg});
            return;
          }
          this.view = 'student';
          this.student = res.detalle;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.isLoading = false;
          this._toastService.add({
            type: 'error',
            message: 'No se pudo obtener la solicitud del estudiante, intente de nuevo'
          });
        }
      })
    );
  }

  protected viewFileAnnexe(url: string): void {
    this.fileUrl = url;
    this.showModal = true;
  }

  protected updateStatusService(service: number, status: string): void {
    this.action = status;
    this.serviceID = service;
    this.alertModal = true;
  }

  protected handleUpdateStatus(): void {

    const data: IUpdateService = {
      solicitud_id: this.student.id,
      servicios: [
        {
          servicio_id: this.serviceID,
          estado: this.action
        }
      ]
    }

    this.isLoading = true;

    this._subscriptions.add(
      this._managerService.updateStatusService(data).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'info', message: res.msg});
            return;
          }
          this._toastService.add({type: 'info', message: "Estado actualizado correctamente"});

          const service = this.student.servicios_solicitados.find(service => service.id = this.serviceID);
          if (service) service.estado = this.action;

          this.alertModal = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.isLoading = false;
          this._toastService.add({
            type: 'error',
            message: 'No se pudo actualizar el estado del servicio, intente nuevamente!'
          });
        }
      })
    );
  }

}
