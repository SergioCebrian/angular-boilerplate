import { Injectable } from '@angular/core';

import { RestService } from '@services/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly restService: RestService
  ) { }

  /*=============================================*\
   * CONTACT
  /*=============================================*/

  async example(data: { [key: string]: any }): Promise<void> {
    return await this.restService.getAll('example', data);
  }

}
