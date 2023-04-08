import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultPhoto',
  standalone: true
})
export class DefaultPhotoPipe implements PipeTransform {

  private readonly defaultVal = '/assets/images/default-photo.png';

  constructor() {}

  public transform(val: string): string {
    if (val && val.length > 0) {
      return val;
    } else {
      return this.defaultVal;
    }
  }

}