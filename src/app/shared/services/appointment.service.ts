import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  bookAppointment(formData: any): Observable<any> {
    return this.http.post(
      'https://royal-shield-be-production.up.railway.app/bookForm',
      formData
    );
  }
}
