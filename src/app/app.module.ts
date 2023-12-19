import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, NgControl, NgModel, ReactiveFormsModule } from '@angular/forms';
import { UsersPageComponent } from './admin/users-page/users-page.component';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin/admin-routing.module';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ShowproductImgaeDialogComponent } from './admin/product/showproduct-imgae-dialog/showproduct-imgae-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    UsersPageComponent,
    HeaderAdminComponent,
    NavigationComponent,
    RegisterComponent,
    ShowproductImgaeDialogComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,BrowserAnimationsModule,
     MatCardModule,
     MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,MatBadgeModule
    ,AdminRoutingModule,MatInputModule,MatIconModule,FormsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),MatGridListModule,NgxPaginationModule,
    MatDialogModule
    ,
  ],
  providers: [ provideAnimations(), // required animations providers
  provideToastr({
    timeOut: 7000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }),  ]  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
