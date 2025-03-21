import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private apiUrl = 'https://libretranslate.com/translate';

  constructor(private http: HttpClient) {}

  translateText(text: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      q: text,
      source: 'en',
      target: 'ar',
      format: 'text',
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      catchError((error) => {
        console.error('Translation API error:', error);
        return throwError(() => new Error('Error while translating text'));
      })
    );
  }
}
