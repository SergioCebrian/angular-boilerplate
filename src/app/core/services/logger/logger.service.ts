import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  writeLog(message = '', data = {}): void {
    const checkDevMode: boolean = isDevMode();
    if (checkDevMode) {
      console.log(message, data);
    }
  }
}
