import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDetail, IResponse, ISession, Login} from "../../models/auth";
import {Cipher} from "../../utils/ciphers/ciphers";
import {JwtHelper} from "../../utils/jwt/jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _urlBase: string = 'https://dbu-dev.dimo-app.com';
  public _urlLogin: string = this._urlBase + '/login';
  public _cipher = new Cipher();
  public _jwtHelper = new JwtHelper();

  constructor(
    private _http: HttpClient
  ) {
  }

  public login(user: Login): Observable<IResponse> {
    return this._http.post<IResponse>(this._urlLogin, user);
  }

  public saveSession(data: IDetail): void {
    sessionStorage.setItem('access_token', data.token.replace('Bearer ', ''));
    const session: ISession = {
      created_at: data.created_at,
      email: data.email,
      expired_in: data.expirer_in,
      full_name: data.full_name,
      id: data.id,
      id_level_user: data.id_level_user,
      status_id: data.status_id,
      updated_at: data.updated_at,
      username: data.username
    };
    sessionStorage.setItem('session', JSON.stringify(session));
  }

  public isValidSession(): boolean {
    const token = sessionStorage.getItem('access_token');
    if (!token) return false;

    if (!this._cipher.verifyJWT(token)) return false;

    return !this._jwtHelper.isTokenExpired(token);
  }
}
