import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponse} from "../../models/response";
import {IAnnouncement} from "../../models/announcement";
import {IBodyRequest, IFileRequest, IRequest, IResponseFile, IUpdateService} from "../../models/requests";
import {IDebtsStudent, IValidationUser} from "../../models/user";
import {EnvServiceFactory} from "../env/env.service.provider";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private urlBase = EnvServiceFactory().API_DBU;
  private urlCaja = EnvServiceFactory().API_CAJA;
  private urlBaseAnnouncement = this.urlBase + '/convocatoria';
  private urlRequests = this.urlBase + '/solicitudes';
  private urlRequest = this.urlBase + '/solicitud';
  private urlCreate = this.urlBaseAnnouncement + '/create';

  constructor(
    private http: HttpClient
  ) {
  }

  public getAnnouncement(): Observable<IResponse<IAnnouncement[]>> {
    return this.http.get<IResponse<IAnnouncement[]>>(this.urlBaseAnnouncement);
  }

  public createAnnouncement(announcement: IAnnouncement): Observable<IResponse> {
    return this.http.post<IResponse>(this.urlCreate, announcement);
  }

  public getRequests(): Observable<IResponse<IRequest[]>> {
    return this.http.get<IResponse<IRequest[]>>(this.urlRequests);
  }

  public getCurrentAnnouncement(): Observable<IResponse<IAnnouncement>> {
    return this.http.get<IResponse<IAnnouncement>>(this.urlBaseAnnouncement + '/vigente-convocatoria');
  }

  public getDataStudent(code: string): Observable<IResponse<IAnnouncement>> {
    return this.http.get<IResponse<IAnnouncement>>(this.urlRequest + '/alumno/' + code);
  }

  public uploadRequestFile(file: IFileRequest): Observable<IResponse<IResponseFile>> {
    return this.http.post<IResponse<IResponseFile>>(this.urlRequest + '/uploadDocument', file);
  }

  public createRequest(data: IBodyRequest): Observable<IResponse> {
    return this.http.post<IResponse>(this.urlRequest + '/create', data);
  }

  public validateStudent(data: IValidationUser): Observable<IResponse> {
    return this.http.post<IResponse>(this.urlRequest + '/validacion', data);
  }

  public getStudentRequest(code: number): Observable<IResponse<IRequest>> {
    return this.http.get<IResponse<IRequest>>(this.urlRequest + '/show/' + code);
  }

  public updateStatusService(data: IUpdateService): Observable<IResponse> {
    return this.http.put<IResponse>(this.urlRequest + '/servicio', data);
  }

  public validateStudentDebts(code: string): Observable<IDebtsStudent[]> {
    return this.http.get<IDebtsStudent[]>(this.urlCaja + '/api/report/hasdebt/' + code);
  }

  public exportRequest(): Observable<Blob> {
    return this.http.get(this.urlRequest + '/export', {responseType: 'blob'});
  }
}
