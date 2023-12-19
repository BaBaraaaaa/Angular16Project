

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {authGuard} from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './public/profile/profile/profile.component';
import { CheckoutComponent } from './public/checkout/checkout.component';


const routes: Routes = [
  {path:'',loadChildren : ()=>import('./public/public.module').then((m)=>m.PublicModule)},

   {path:'admin',loadChildren : ()=>import('./admin/admin.module').then((m)=>m.AdminModule),
  canActivate:[authGuard]},
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
