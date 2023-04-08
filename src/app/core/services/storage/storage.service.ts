import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getCurrentUser(): string | null | any {
    const getUser: any = localStorage.getItem('currentUser');
    return JSON.parse(getUser);
  }

  getToken(): string | null | any {
    const token: any = localStorage.getItem('token');
    return JSON.parse(token);
  }

  getItem(key: string): any {
    const data: any = localStorage.getItem(key);
    return JSON.parse(data);
  }

  setItem(key: string, value: any): any {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): any {
    return localStorage.removeItem(key);
  }

  clear(): any {
    return localStorage.clear();
  }

}
