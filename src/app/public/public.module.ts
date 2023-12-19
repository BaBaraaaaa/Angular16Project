import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { NgOptimizedImage } from '@angular/common'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopComponent } from './category/shop.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { ProfileComponent } from './profile/profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    HeaderComponent
    ,FooterComponent, CartComponent, ShopComponent,ProfileComponent,CheckoutComponent

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatCardModule,
    MatButtonModule,
   MatFormFieldModule,MatInputModule,
   HttpClientModule,MatBadgeModule
   ,NgOptimizedImage,ReactiveFormsModule,NgxPaginationModule,FormsModule,
  //  BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ]
})
export class PublicModule { }
