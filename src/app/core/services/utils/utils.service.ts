import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  generateUUID(): string {
    return crypto.randomUUID();
  }

}
