import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  constructor(private http: HttpClient) {}
  serverUrl: string = 'https://royal-shield-be-production.up.railway.app';
  // serverUrl: string = 'http://localhost:3000';

  warrantyActivation(warrantyForm: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/activation`, warrantyForm);
  }
}
