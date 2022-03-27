import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValidationSecondRoutingModule } from './form-validation-second-routing.module';
import { FormValidationSecondComponent } from './form-validation-second.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormValidationSecondComponent
  ],
  imports: [
    CommonModule,
    FormValidationSecondRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormValidationSecondModule { }
