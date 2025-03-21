import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}

  lang: BehaviorSubject<string> = new BehaviorSubject('en');
}
