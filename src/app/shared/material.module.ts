import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }