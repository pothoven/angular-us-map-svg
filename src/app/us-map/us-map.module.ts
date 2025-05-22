import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsMapComponent } from './us-map.component';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    UsMapComponent
  ],
  exports: [ UsMapComponent ]
})
export class UsMapModule { }
