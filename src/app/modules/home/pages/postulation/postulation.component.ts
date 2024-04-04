import {Component, OnDestroy} from '@angular/core';
import {NgIf} from "@angular/common";
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {CdkAccordionItem} from "@angular/cdk/accordion";
import {IAnnouncement, IRequirement, ISection} from "../../../../core/models/announcement";
import {ManagerService} from "../../../../core/services/manager/manager.service";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {Subscription} from "rxjs";
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";
import {IBodyRequest, IFileRequest} from "../../../../core/models/requests";

@Component({
  selector: 'app-postulation',
  standalone: true,
  imports: [
    NgIf,
    ModalComponent,
    CdkAccordionItem,
    BlockUiComponent,
    ReactiveFormsModule,
    ToastComponent
  ],
  templateUrl: './postulation.component.html',
  styleUrl: './postulation.component.scss',
  providers: [ManagerService, ToastService]
})
export class PostulationComponent implements OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  protected showModal: boolean = false;
  protected view: string = 'list';
  protected announcement: IAnnouncement = {
    nombre: '',
    convocatoria_servicio: [],
    fecha_fin: '',
    fecha_inicio: '',
    secciones: [],
    activo: false
  };
  protected postulation: IAnnouncement = {
    nombre: '',
    convocatoria_servicio: [],
    fecha_fin: '',
    fecha_inicio: '',
    secciones: [],
    activo: false
  };
  protected isLoading: boolean = false;
  protected deleteModal: boolean = false;
  protected formPostulation: FormGroup;

  constructor(
    private _managerService: ManagerService,
    private _toastService: ToastService,
    private _fb: FormBuilder
  ) {
    this.getCurrentAnnouncement();
    this.formPostulation = this._fb.group({
      dni_student: ['', Validators.required],
      email_student: ['', [Validators.required, Validators.email]],
      eat_service: [false, Validators.required,],
      resident_service: [false, Validators.required],
    });
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  protected init(): void {
    this.view = 'list';
    this.postulation = {
      nombre: '',
      convocatoria_servicio: [],
      fecha_fin: '',
      fecha_inicio: '',
      secciones: [],
      activo: false
    };
    this.formPostulation = this._fb.group({
      dni_student: ['', Validators.required],
      email_student: ['', [Validators.required, Validators.email]],
      eat_service: [false, Validators.required,],
      resident_service: [false, Validators.required],
    });
  }

  private getCurrentAnnouncement(): void {
    this.isLoading = true;

    this._subscriptions.add(
      this._managerService.getCurrentAnnouncement().subscribe({
        next: (res) => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: 'No se encontró la convocatoria actual'});
            return;
          }
          this.announcement = res.detalle;
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this._toastService.add({type: 'error', message: 'No se pudo obtener la convocatoria actual'});
          console.error(err)
        }
      })
    );
  }

  protected getStudent(): void {

    if (this.formPostulation.invalid) {
      this._toastService.add({type: 'error', message: 'Complete todos los campos correctamente!'});
      this.formPostulation.markAllAsTouched();
      return;
    }

    if (!this.formPostulation.value.eat_service && !this.formPostulation.value.resident_service) {
      this._toastService.add({type: 'error', message: 'Seleccione al menos un servicio!'});
      return;
    }

    this.isLoading = true;

    this._subscriptions.add(
      this._managerService.getDataStudent(this.formPostulation.value.dni_student).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: res.msg});
            return;
          }
          this.view = 'postulate';
          this.showModal = false;
          this.postulation = res.detalle;
          this.processForm(res.detalle.secciones);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.isLoading = false;
          this._toastService.add({
            type: 'error',
            message: 'No se pudo obtener los datos del alumno, intente nuevamente'
          });
          return;
        }
      })
    );
  }

  private processForm(sections: ISection[]): void {
    for (const section of sections) {
      for (const req of section.requisitos) {
        const key = (req.id || 0).toString();
        let defaultValue = req.default ? req.default : '';
        if (req.nombre === 'Correo institutcional') defaultValue = this.formPostulation.value.email_student;
        this.formPostulation.addControl(key, new FormControl(defaultValue, Validators.required));
        if (defaultValue) this.formPostulation.get(key)?.disable();
      }
    }
  }

  protected processFile(event: any, key: string): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const body: IFileRequest = {
        id_convocatoria: this.postulation.id || 0,
        dni_alumno: parseInt(this.formPostulation.value.dni_student),
        name_file: file.name,
        file: (reader.result as string).split(',')[1] || ''
      };
      this.handleLoadFile(body, key);
    };
  }

  private handleLoadFile(body: IFileRequest, key: string): void {
    this.isLoading = true;

    this._subscriptions.add(
      this._managerService.uploadRequestFile(body).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: res.msg});
            return;
          }

          this._toastService.add({type: 'success', message: res.msg});
          console.log(res)
          this.formPostulation.get(key)?.setValue(res.detalle.url_file);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.isLoading = false;
          this._toastService.add({type: 'error', message: 'No se pudo subir el archivo, intente nuevamente'});
        }
      })
    );
  }

  protected handlePostulation(): void {

    const body: IBodyRequest = {
      convocatoria_id: this.postulation?.id || 0,
      alumno_id: this.postulation.user_id || 0,
      servicios_solicitados: [],
      detalle_solicitudes: []
    };

    if (this.formPostulation.invalid) {
      this._toastService.add({type: 'error', message: 'Complete todos los campos correctamente!'});
      this.formPostulation.markAllAsTouched();
      return
    }

    if (this.formPostulation.value.eat_service) {
      body.servicios_solicitados.push({
        estado: 'pendiente',
        servicio_id: 1
      });
    }

    if (this.formPostulation.value.resident_service) {
      body.servicios_solicitados.push({
        estado: 'pendiente',
        servicio_id: 2
      });
    }

    const sections = this.postulation.secciones;

    for (const key in this.formPostulation.controls) {
      if (!this.formPostulation.controls.hasOwnProperty(key)) continue;
      const control = this.formPostulation.controls[key];

      let req: IRequirement | undefined = undefined;
      for (const section of sections) {
        req = section.requisitos.find((r) => r.id === parseInt(key));
        if (req) break;
      }

      if (!req) continue;

      body.detalle_solicitudes.push({
        respuesta_formulario: req.tipo_requisito_id === 3 ? control.value : '',
        url_documento: [1, 2].includes(req.tipo_requisito_id) ? control.value : '',
        opcion_seleccion: req.tipo_requisito_id === 4 ? control.value : '',
        requisito_id: parseInt(key)
      });
    }

    this.isLoading = true;

    this._subscriptions.add(
      this._managerService.createRequest(body).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: res.msg});
            return;
          }

          this._toastService.add({type: 'success', message: 'Postulación realizada correctamente'});
          this.init();
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.isLoading = false;
          this._toastService.add({type: 'error', message: 'No se pudo realizar la postulación, intente nuevamente'});
        }
      })
    );
  }

}
