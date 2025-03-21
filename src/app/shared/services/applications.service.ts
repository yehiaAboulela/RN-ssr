import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  baseUrl = 'https://royal-shield-be-production.up.railway.app';

  constructor(private http: HttpClient) {}

  postApplication(application: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/application`, application);
  }
}
