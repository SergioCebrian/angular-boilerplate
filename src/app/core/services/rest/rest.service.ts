import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private readonly api = environment.api;
  private readonly http = inject(HttpClient);

  constructor() { }

getAll(
    url: string,
    params: HttpParams | {} = {}
  ): Observable<any> {
    return this.http.get(`${ this.api }${ url }`, { observe: 'response', params })
                    .pipe(catchError(err => of([])));
  }

  getOne(
    url: string,
    params: HttpParams | {} = {}
  ): Observable<any> {
    return this.http.get(`${ this.api }${ url }`, { observe: 'response', params })
                    .pipe(catchError(err => of([])));
  }

  save(
    url: string,
    body = {},
    params: HttpParams | {} = {}
  ): Observable<any> {
    return this.http.post(`${ this.api }${ url }`, body, { observe: 'body', params })
                    .pipe(catchError(err => of([])));
  }

  update(
    url: string,
    body = {},
    params: HttpParams | {} = {},
  ): Observable<any> {
    return this.http.put(`${ this.api }${ url }`, body, { observe: 'response', params })
                    .pipe(catchError(err => of([])));
  }

  delete(
    url: string,
    params: HttpParams | {} = {}
  ): Observable<any> {
    return this.http.delete(`${ this.api }${ url }`, { observe: 'response', params })
                    .pipe(catchError(err => of([])));
  }

}
