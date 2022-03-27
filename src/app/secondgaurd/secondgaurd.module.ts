import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondgaurdRoutingModule } from './secondgaurd-routing.module';
import { SecondgaurdComponent } from './secondgaurd.component';


@NgModule({
  declarations: [
    SecondgaurdComponent
  ],
  imports: [
    CommonModule,
    SecondgaurdRoutingModule
  ]
})
export class SecondgaurdModule { }
