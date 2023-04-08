import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth, authActionTypes } from '@interfaces/auth';
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

  async doAuth(data: Auth, action: authActionTypes): Promise<void> {
    const resp: Auth = await this.restService.save(action, data);
    if (resp && resp.token) {
      await this.storageService.setItem('token', resp.token);
      this.router.navigate(['/']);
    }
  }

  async doLogout(): Promise<void> {
    await this.router.navigate(['/login']);
    await this.storageService.clear();
  }

}
