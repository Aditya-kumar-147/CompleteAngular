import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstgaurdComponent } from './firstgaurd.component';

const routes: Routes = [{ path: '', component: FirstgaurdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstgaurdRoutingModule { }
