import {Component, OnDestroy} from '@angular/core';
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {DatePipe, JsonPipe, NgIf} from "@angular/common";
import {CdkAccordionItem} from "@angular/cdk/accordion";
import {IAnnouncement, IRequirement} from "../../../../core/models/announcement";
import {
  SECTIONS_REQUIREMENTS_ONE,
  SECTIONS_REQUIREMENTS_THREE,
  SECTIONS_REQUIREMENTS_TWO
} from "../../../../core/utils/statics/statics";
import {ManagerService} from "../../../../core/services/manager/manager.service";
import {Subscription} from "rxjs";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [
    ModalComponent,
    NgIf,
    CdkAccordionItem,
    BlockUiComponent,
    DatePipe,
    ReactiveFormsModule,
    ToastComponent,
    FormsModule,
    JsonPipe
  ],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
  providers: [ManagerService, ToastService]
})
export class AnnouncementComponent implements OnDestroy {
  private _subscriptions: Subscription = new Subscription();
  protected typeProcess: string = 'create';
  private reqIndex: number = -1;
  protected openModal: boolean = false;
  protected currentSection: number = 0;
  protected view: string = 'list';
  protected announcements: IAnnouncement[] = [];
  protected announcement: IAnnouncement = {
    nombre: '',
    convocatoria_servicio: [],
    fecha_fin: '',
    fecha_inicio: '',
    secciones: [],
    activo: false
  };
  protected titleModal: string = 'Creación de requisito';
  protected isLoad: boolean = false;
  protected formRequirement: FormGroup;
  protected formAnnouncement: FormGroup;

  constructor(
    private _managerService: ManagerService,
    private _toastService: ToastService,
    private _fb: FormBuilder
  ) {
    this._getAnnouncement();
    this.formRequirement = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      guide: ['', Validators.required],
      format: ['', Validators.required],
      active: [false, Validators.required]
    });

    this.formAnnouncement = this._fb.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    this.init();
  }


  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
    this.init();
  }

  private init(): void {
    this.announcement.nombre = '';
    this.announcement.fecha_fin = '';
    this.announcement.fecha_inicio = '';
    this.announcement.secciones = [
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
    ];
  }

  private _getAnnouncement() {

    this.isLoad = true;
    this._subscriptions.add(
      this._managerService.getAnnouncement().subscribe({
        next: (res) => {
          this.isLoad = false;
          if (!res.detalle) {
            this._toastService.add({
              type: 'error',
              message: 'No se pudo obtener el listado de convocatorias, intente nuevamente'
            });
            return;
          }

          this.announcements = res.detalle;

          for (const announcement of this.announcements) {
            announcement.activo = announcement.fecha_fin > new Date().toISOString();
          }

          this.announcements.sort((a, b) => {
              return new Date(b.fecha_fin).getTime() - new Date(a.fecha_fin).getTime();
            }
          );
        },
        error: (error) => {
          console.error(error);
          this._toastService.add({type: 'error', message: 'Error al obtener la convocatoria'});
          this.isLoad = false;
        }
      })
    );
  }

  protected processFile(event: any): void {
    const file: File = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (res) => {
      this.formRequirement.get('guide')?.setValue(res.target?.result);
    };
  }

  protected createAnnouncement(): void {
    this.view = 'create';
    this.formAnnouncement.enable();
    this.formAnnouncement.reset();
    this.init();
  }

  protected viewAnnouncement(item: IAnnouncement): void {
    this.announcement = JSON.parse(JSON.stringify(item));
    this.formAnnouncement.patchValue({
      name: this.announcement.nombre,
      startDate: this.announcement.fecha_inicio,
      endDate: this.announcement.fecha_fin
    });

    this.formAnnouncement.disable();
    this.view = 'view-readonly';
  }

  protected createRequirement(index: number): void {
    this.openModal = true;
    this.currentSection = index;
    this.titleModal = 'Creación de requisito';
    this.typeProcess = 'create';
    this.formRequirement.reset();
    this.formRequirement.enable();
  }

  protected createOrUpdateRequirement(): void {
    if (this.formRequirement.invalid) {
      this._toastService.add({type: 'error', message: 'Complete los campos correctamente'});
      this.formRequirement.markAllAsTouched();
      return;
    }

    this.openModal = false;
    if (this.typeProcess === 'create') {

      this.announcement.secciones[this.currentSection].requisitos.push({
        activo: this.formRequirement.value.active,
        url_guia: this.formRequirement.value.guide,
        descripcion: this.formRequirement.value.description,
        nombre: this.formRequirement.value.name,
        tipo_requisito_id: this.formRequirement.value.format
      });
      this.formRequirement.reset();
      return;
    }

    this.announcement.secciones[this.currentSection].requisitos[this.reqIndex] = {
      activo: this.formRequirement.value.active,
      url_guia: this.formRequirement.value.guide,
      descripcion: this.formRequirement.value.description,
      nombre: this.formRequirement.value.name,
      tipo_requisito_id: this.formRequirement.value.format
    };
    this.formRequirement.reset();
    return;
  }

  protected editRequirement(req: IRequirement, index: number, section: number): void {
    this.typeProcess = 'edit';
    this.titleModal = 'Edición de requisito';
    this.reqIndex = index;
    this.currentSection = section;
    this.formRequirement.patchValue({
      name: req.nombre,
      description: req.descripcion,
      guide: req.url_guia,
      format: req.tipo_requisito_id,
      active: req.activo
    });
    this.formRequirement.enable();
    this.openModal = true;
  }

  protected viewRequirement(req: IRequirement): void {
    this.typeProcess = 'view';
    this.titleModal = 'Vista del requisito';
    this.formRequirement.patchValue({
      name: req.nombre,
      description: req.descripcion,
      guide: req.url_guia,
      format: req.tipo_requisito_id,
      active: req.activo
    });
    this.formRequirement.disable();
    this.openModal = true;
  }

  protected submitAnnouncement(): void {
    if (this.formAnnouncement.invalid) {
      this._toastService.add({type: 'error', message: 'Complete los campos correctamente'});
      this.formAnnouncement.markAllAsTouched();
      return;
    }

    this.announcement.nombre = this.formAnnouncement.value.name;
    this.announcement.fecha_inicio = this.formAnnouncement.value.startDate;
    this.announcement.fecha_fin = this.formAnnouncement.value.endDate;
    this.announcement.activo = true;
    debugger;
    this.isLoad = true;
    this._subscriptions.add(
      this._managerService.createAnnouncement(this.announcement).subscribe({
        next: (res) => {
          this.isLoad = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: 'No se pudo crear la convocatoria, intente nuevamente'});
            return;
          }

          this._toastService.add({type: 'success', message: 'Convocatoria creada correctamente'});

          this.announcements.push(this.announcement);
          this.formAnnouncement.reset();
          this.init();
          this._getAnnouncement();
          this.view = 'list';
        },
        error: (error) => {
          console.error(error);
          this._toastService.add({type: 'error', message: 'Error al crear la convocatoria'});
          this.isLoad = false;
        }
      })
    );
  }
}