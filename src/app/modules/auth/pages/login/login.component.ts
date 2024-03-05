import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {Cipher} from "../../../../core/utils/ciphers/ciphers";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {Subscription} from "rxjs";
import {Login} from "../../../../core/models/auth";
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    ToastComponent,
    BlockUiComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService, ToastService]
})
export class LoginComponent implements OnDestroy {

  private _subscriptions: Subscription = new Subscription();
  private _cipher: Cipher = new Cipher();
  public loginForm: FormGroup;
  public isLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _toastService: ToastService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  public login(): void {
    if (this.loginForm.invalid) {
      this._toastService.add({type: 'warning', message: 'Complete todos los campos correctamente'});
      return;
    }

    const data: Login = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.isLoading = true;
    this._subscriptions.add(
      this._authService.login(data).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: 'No se pudo iniciar sesión, intente nuevamente'});
            return;
          }

          this._authService.saveSession(res.detalle);
          this._router.navigate(['/home']);
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this._toastService.add({type: 'error', message: err.error.msg});
          console.log(err);
        }
      })
    );
  }

}
