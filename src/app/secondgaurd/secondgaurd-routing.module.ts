import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondgaurdComponent } from './secondgaurd.component';

const routes: Routes = [{ path: '', component: SecondgaurdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondgaurdRoutingModule { }
