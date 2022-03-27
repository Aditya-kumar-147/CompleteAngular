import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormValidationRoutingModule } from './form-validation-routing.module';
import { FormValidationComponent } from './form-validation.component';


@NgModule({
  declarations: [
    FormValidationComponent
  ],
  imports: [
    CommonModule,
    FormValidationRoutingModule,
    FormsModule
  ]
})
export class FormValidationModule { }
