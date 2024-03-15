import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponse} from "../../models/response";
import {IAnnouncement} from "../../models/announcement";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private urlBase = 'https://dbu-dev.dimo-app.com';
  private urlGetAnnouncements = this.urlBase + '/convocatoria';

  constructor(
    private http: HttpClient
  ) {
  }

  public getAnnouncement(): Observable<IResponse<IAnnouncement[]>> {
    return this.http.get<IResponse<IAnnouncement[]>>(this.urlGetAnnouncements);
  }

  public createAnnouncement(announcement: IAnnouncement): Observable<IResponse> {
    return this.http.post<IResponse>(this.urlGetAnnouncements, announcement);
  }

}
