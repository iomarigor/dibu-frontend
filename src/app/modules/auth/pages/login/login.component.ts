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
import {AppState} from "../../../../core/store/app.reducers";
import {Store} from "@ngrx/store";
import {controlAuth} from "../../../../core/store/actions/auth.action";
import {RecaptchaModule} from "ng-recaptcha";
import {NgIf} from "@angular/common";
import {EnvServiceFactory} from "../../../../core/services/env/env.service.provider";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    ToastComponent,
    BlockUiComponent,
    RecaptchaModule,
    NgIf
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
  protected googleKey: string = EnvServiceFactory().GOOGLE_RECAPTCHA_SITEKEY;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _toastService: ToastService,
    private _router: Router,
    private _storage: Store<AppState>
  ) {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  public login(): void {
    if (this.loginForm.invalid) {
      this._toastService.add({type: 'warning', message: 'Complete todos los campos correctamente'});
      this.loginForm.markAllAsTouched();
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
          this._storage.dispatch(controlAuth({
            auth: {
              isAuth: true,
              token: res.detalle.token,
              session: this._authService.getSession()
            }
          }));

          this._router.navigate(['/home/requests']);
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
