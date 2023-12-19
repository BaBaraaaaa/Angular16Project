import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './category/shop.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile/profile.component';


const routes: Routes = [
  {path:'',component:PublicComponent,
children:[
  {path:'',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {
    path:'shop',component:ShopComponent
  },
  {
    path: 'contact',component: ContactComponent
  },
  {
    path: 'about',component:AboutComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
   {
    path: 'checkout',component:CheckoutComponent
  }
]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
