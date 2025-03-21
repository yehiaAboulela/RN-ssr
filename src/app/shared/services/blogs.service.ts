import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlogItem } from '../interface/blog-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://royal-shield-be-production.up.railway.app';
  // private apiUrl = 'http://localhost:3000';

  getBlogs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/blog`);
  }
  getBlogById(blogId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/blog/${blogId}`);
  }
}
