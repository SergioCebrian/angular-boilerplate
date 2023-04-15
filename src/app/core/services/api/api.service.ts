import { Inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { RestService } from '@services/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly api = environment.api;
  private readonly restService = Inject(RestService);

  constructor() { }

  /*=============================================*\
   * Example
  /*=============================================*/

  async example(url: string, data: { [key: string]: any }): Promise<void> {
    return await this.restService.getAll(`${ this.api }${ url }`, data);
  }

}
