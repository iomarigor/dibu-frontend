import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {Cipher} from "../../../../core/utils/ciphers/ciphers";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";
import {ToastService} from "../../../../core/services/toast/toast.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    ToastComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService, ToastService]
})
export class LoginComponent {

  public loginForm: FormGroup;
  private cipher: Cipher = new Cipher();
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _toastService: ToastService
  ) {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      code: ['', Validators.required]
    });
  }

  public login(): void {
    if (this.loginForm.invalid) {
      this._toastService.add({type: 'error', message: 'Please fill all the fields'});
      return;
    }
  }

}
