import {Component, OnDestroy} from '@angular/core';
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {IUser, IUserCreation} from "../../../../core/models/user";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {Subscription} from "rxjs";
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ModalComponent,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    BlockUiComponent,
    ToastComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [ToastService, AuthService]
})
export class UsersComponent implements OnDestroy {

  private _subscriptions: Subscription = new Subscription();
  private typeModal: string = 'create';

  protected userSelected!: IUser;
  protected showModal: boolean = false;
  protected modalTitle: string = 'Crear Usuario';
  protected formUser: FormGroup;
  protected isLoading: boolean = false;
  protected deleteModal: boolean = false;
  protected users: IUser[] = [];

  constructor(
    private _fb: FormBuilder,
    private _toastService: ToastService,
    private _authService: AuthService
  ) {
    this.formUser = this._fb.group({
      name: ['', Validators.required],
      user: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
    this.getUsers();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.formUser.reset();
  }

  private getUsers(): void {
    this.isLoading = true;

    this._subscriptions.add(
      this._authService.getUsers().subscribe({
        next: res => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: 'No se pudo obtner los usuarios, intente nuevamente'});
            return;
          }

          this.users = res.detalle;
        },
        error: err => {
          console.error(err);
          this._toastService.add({type: 'error', message: 'No se pudo obtener los usuarios, intente nuevamente'});
          this.isLoading = false;
        }
      })
    );
  }

  protected onCreateUser(): void {
    this.typeModal = 'create';
    this.modalTitle = 'Crear Usuario'
    this.formUser.reset();
    this.formUser.enable();
    this.showModal = true;
  }

  protected onUpdateUser(usr: IUser): void {
    this.userSelected = usr;
    this.typeModal = 'update';
    this.modalTitle = 'Actualizar Usuario'
    this.formUser.patchValue({
      name: usr.full_name,
      user: usr.username,
      email: usr.email,
      password: '',
      role: usr.id_level_user
    })
    this.formUser.enable();
    this.showModal = true;
  }

  protected saveUser(): void {

    if (this.formUser.invalid) {
      this._toastService.add({type: 'error', message: 'Complete todos los campos correctamente.'});
      this.formUser.markAllAsTouched();
      return;
    }

    if (this.typeModal === 'create') {
      this.createUser();
      return;
    }

    this.updateUser();
  }

  protected createUser(): void {

    const data: IUserCreation = {
      email: this.formUser.value.email,
      password: this.formUser.value.password,
      full_name: this.formUser.value.name,
      id_level_user: parseInt(this.formUser.value.role, 10),
      username: this.formUser.value.user,
      password_confirmation: this.formUser.value.password
    };

    this.isLoading = true;
    this._subscriptions.add(
      this._authService.createUser(data).subscribe({
        next: res => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: res.msg});
            return;
          }

          this.getUsers();
          this.showModal = false;
        },
        error: err => {
          this.isLoading = false;
          console.error(err);
          this._toastService.add({type: 'error', message: 'No se pudo crear el usuario, intente nuevamente'});
        }
      })
    );
  }

  protected updateUser(): void {

    const data: IUserCreation = {
      email: this.formUser.value.email,
      password: this.formUser.value.password,
      full_name: this.formUser.value.name,
      id_level_user: parseInt(this.formUser.value.role, 10),
      username: this.formUser.value.user,
      password_confirmation: this.formUser.value.password
    };

    this.isLoading = true;
    this._subscriptions.add(
      this._authService.updateUser(data, this.userSelected.id).subscribe({
        next: res => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: res.msg});
            return;
          }

          this.getUsers();
          this.showModal = false;
        },
        error: err => {
          this.isLoading = false;
          console.error(err);
          this._toastService.add({type: 'error', message: 'No se pudo actualizar el usuario, intente nuevamente'});
        }
      })
    );
  }

  protected deleteUser(): void {
    this.isLoading = false;
    this._subscriptions.add(
      this._authService.deleteUser(this.userSelected.id).subscribe({
        next: res => {
          this.isLoading = false;

          if (!res.detalle) {
            this._toastService.add({type: 'error', message: res.msg});
            return;
          }

          this.getUsers();
          this.deleteModal = false;
        },
        error: err => {
          console.error(err);
          this._toastService.add({type: 'error', message: 'No se pudo borrar al usuario, intente nuevamente.'});
          this.isLoading = false;
        }
      })
    );
  }

}
