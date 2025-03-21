import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  constructor(private http: HttpClient) {}

  postLeadForm(leadData: any): Observable<any> {
    const url =
      'https://api.engazcrm.net/api/company3/save/UNKNOWNFACEBOOK671e3665c9fce?subdomain=royalnanoceramic';
    return this.http.post(url, leadData);
  }
}
