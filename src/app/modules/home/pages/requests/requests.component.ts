import {Component, OnDestroy} from '@angular/core';
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {ManagerService} from "../../../../core/services/manager/manager.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {IRequest, IUpdateService} from "../../../../core/models/requests";
import {DatePipe, KeyValuePipe, NgIf} from "@angular/common";
import {CdkAccordionItem} from "@angular/cdk/accordion";
import {SafePipePipe} from "../../../../core/pipes/safe-pipe.pipe";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {FilterService} from "../../../../core/services/filter/filter.service";

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
  providers: [ToastService, ManagerService, AuthService, FilterService]
})
export class RequestsComponent implements OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  protected isLoading: boolean = false;
  protected requests: IRequest[] = [];
  protected requestsDisplay: IRequest[] = [];
  protected view: string = 'list';
  protected student!: IRequest;
  protected showModal: boolean = false;
  protected fileUrl: string = '';
  protected alertModal: boolean = false;
  protected action: string = '';
  private serviceID: number = 0;
  protected role: number = 0;
  protected messageService: FormControl;

  constructor(
    private _toastService: ToastService,
    private _managerService: ManagerService,
    private _authService: AuthService,
    private _filterService: FilterService,
  ) {
    this.getRequests();
    this.role = this._authService.getRole();
    this.messageService = new FormControl<string>('', Validators.required);
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
          this.requestsDisplay = res.detalle;
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

    if (status !== 'rechazado') {
      this.messageService.clearValidators();
      this.messageService.updateValueAndValidity();
    } else {
      this.messageService.setValidators(Validators.required);
      this.messageService.updateValueAndValidity();
    }
  }

  protected handleUpdateStatus(): void {

    if (this.messageService.invalid) {
      this._toastService.add({type: 'warning', message: 'Debe de ingresar el motivo del rechazo!'});
      this.messageService.markAllAsTouched();
      return;
    }

    const data: IUpdateService = {
      solicitud_id: this.student.id,
      servicios: [
        {
          servicio_id: this.serviceID,
          estado: this.action,
          detalle_rechazo: this.messageService.value.trim()
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

  protected exportToExcel(): void {
    this.isLoading = true;

    this._subscriptions.add(
      this._managerService.exportRequest().subscribe({
        next: (res) => {
          this.isLoading = false;

          this._toastService.add({type: 'info', message: "Archivo exportado correctamente"});

          const blob = new Blob([res], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
          const url = window.URL.createObjectURL(blob);
          let downloadLink = document.createElement('a');
          downloadLink.href = url;
          downloadLink.download = 'Lista de postulantes.xlsx';

          document.body.appendChild(downloadLink);
          downloadLink.click();

          document.body.removeChild(downloadLink);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.isLoading = false;
          this._toastService.add({
            type: 'error',
            message: 'No se pudo exportar el archivo, intente nuevamente!'
          });
        }
      })
    );
  }

  protected findRequest(event: any): void {
    const dataToFilter: IRequest[] = JSON.parse(JSON.stringify(this.requests));
    const filterValue = event.target.value;
    if (!filterValue || !filterValue.length) {
      this.requestsDisplay = dataToFilter
      return;
    }

    const searchFields: string[] = [
      'codigo_estudiante',
      'nombres',
      'DNI',
      'apellido_paterno',
      'apellido_materno',
      'correo_institucional',
      'correo_personal',
      'celular_estudiante',
      'celular_padre',
      'facultad',
      'escuela_profesional',
      'modalidad_ingreso',
      'lugar_procedencia',
      'lugar_nacimiento',
      'direccion',
      'fecha_nacimiento',
      'edad'
    ];
    this.requestsDisplay = this._filterService.filter(dataToFilter, searchFields, filterValue, 'contains');

  }

}
