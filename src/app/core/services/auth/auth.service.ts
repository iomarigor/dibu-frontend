import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDetailSession, ISession, Login} from "../../models/auth";
import {Cipher} from "../../utils/ciphers/ciphers";
import {JwtHelper} from "../../utils/jwt/jwt";
import {IResponse} from "../../models/response";
import {IUser, IUserCreation} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _urlBase: string = 'https://dbu-dev.dimo-app.com';
  private _urlLogin: string = this._urlBase + '/login';

  private _cipher = new Cipher();
  private _jwtHelper = new JwtHelper();

  constructor(
    private _http: HttpClient
  ) {
  }

  public login(user: Login): Observable<IResponse<IDetailSession>> {
    return this._http.post<IResponse<IDetailSession>>(this._urlLogin, user);
  }

  public createUser(data: IUserCreation): Observable<IResponse> {
    return this._http.post<IResponse>(this._urlBase + '/register', data);
  }

  public updateUser(data: IUserCreation, userId: number): Observable<IResponse> {
    return this._http.post<IResponse>(this._urlBase + '/users/update/' + userId, data);
  }

  public getUsers(): Observable<IResponse<IUser[]>> {
    return this._http.get<IResponse<IUser[]>>(this._urlBase + '/users');
  }

  public deleteUser(userId: number): Observable<IResponse> {
    return this._http.delete<IResponse>(this._urlBase + '/users/destroy/' + userId);
  }

  public saveSession(data: IDetailSession): void {
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

  public getSession(): ISession {
    return JSON.parse(sessionStorage.getItem('session') || '{}');
  }

  public isValidSession(): boolean {
    const token = sessionStorage.getItem('access_token');
    if (!token) return false;

    if (!this._cipher.verifyJWT(token)) return false;

    return !this._jwtHelper.isTokenExpired(token);
  }

  public getToken(): string {
    return sessionStorage.getItem('access_token') || '';
  }

  public logout(): void {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('session');
  }
}
