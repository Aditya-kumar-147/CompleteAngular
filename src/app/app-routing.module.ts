import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'formValidation', loadChildren: () => import('./form-validation/form-validation.module').then(m => m.FormValidationModule) },
  { path: 'formValidation_second',  loadChildren: () => import('./form-validation-second/form-validation-second.module').then(m => m.FormValidationSecondModule) }, 
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }, 
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'firstguard',  canActivate:[AuthGuard] ,loadChildren: () => import('./firstgaurd/firstgaurd.module').then(m => m.FirstgaurdModule) },
  { path: 'secondguard', canActivate:[AuthGuard],loadChildren: () => import('./secondgaurd/secondgaurd.module').then(m => m.SecondgaurdModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
