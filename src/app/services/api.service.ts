import { Product } from './../../types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { options } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(url: string, options: options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>
  }

  post<T>(url: string, body: Product, options: options): Observable<T> {
    return this.httpClient.post<T>(url, body, options) as Observable<T>
  }

  put<T>(url: string, body: Product, options: options): Observable<T> {
    return this.httpClient.put<T>(url, body, options) as Observable<T>
  }

  delete<T>(url: string, options: options): Observable<T> {
    return this.httpClient.delete<T>(url, options) as Observable<T>
  }
}
