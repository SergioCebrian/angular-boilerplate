import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Auth } from '@interfaces/auth';
import { RestService } from '@services/rest/rest.service';
import { StorageService } from '@services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private restService: RestService,
    private storageService: StorageService
  ) { }

  doAuth(data: Auth): Observable<Auth> {
    return this.restService.save('login', data);
  }

  async doLogout(): Promise<void> {
    await this.router.navigate(['/login']);
    await this.storageService.clear();
  }

}
