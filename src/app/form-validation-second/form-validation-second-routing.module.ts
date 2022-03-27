import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationSecondComponent } from './form-validation-second.component';

const routes: Routes = [{ path: '', component: FormValidationSecondComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationSecondRoutingModule { }
