import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstgaurdRoutingModule } from './firstgaurd-routing.module';
import { FirstgaurdComponent } from './firstgaurd.component';


@NgModule({
  declarations: [
    FirstgaurdComponent
  ],
  imports: [
    CommonModule,
    FirstgaurdRoutingModule
  ]
})
export class FirstgaurdModule { }
