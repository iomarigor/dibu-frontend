import {Component, OnDestroy} from '@angular/core';
import {NgIf} from "@angular/common";
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {CdkAccordionItem} from "@angular/cdk/accordion";
import {IAnnouncement, IRequirement, ISection} from "../../../../core/models/announcement";
import {
  SECTIONS_REQUIREMENTS_ONE,
  SECTIONS_REQUIREMENTS_THREE,
  SECTIONS_REQUIREMENTS_TWO
} from "../../../../core/utils/statics/statics";
import {ManagerService} from "../../../../core/services/manager/manager.service";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {Subscription} from "rxjs";
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";

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
  protected formPostulation: FormGroup;

  constructor(
    private _managerService: ManagerService,
    private _toastService: ToastService,
    private _fb: FormBuilder
  ) {
    this.getCurrentAnnouncement();
    this.formPostulation = this._fb.group({
      dni_student: ['', Validators.required],
      email_student: ['', [Validators.required, Validators.email]]
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
      email_student: ['', [Validators.required, Validators.email]]
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
        const defaultValue = req.default ? req.default : '';
        this.formPostulation.addControl(key, new FormControl(defaultValue, Validators.required));
        if (defaultValue) this.formPostulation.get(key)?.disable();
      }
    }
  }

}
