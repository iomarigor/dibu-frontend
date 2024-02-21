import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login} from "../../models/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _urlBase: string = 'http://localhost:3000';
  public _urlLogin: string = this._urlBase + '/login';
  constructor(
    private _http: HttpClient
  ) { }

  public login(user: Login): Observable<any>{
    return this._http.post(this._urlLogin, user);
  }
}
