
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AddProductComponent } from './product/add-product/add-product/add-product.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { EditComponent } from './product/edit-product/edit.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { OderComponent } from './oder/oder.component';
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [

    DashboardComponent,
    ProductComponent,
    CategoryComponent,
    AddProductComponent,
    EditComponent,
    OderComponent,
    ManagerUserComponent



  ],
  imports: [
    CommonModule,
    RouterModule,AdminRoutingModule,
    ReactiveFormsModule,MatFormFieldModule,
    MatInputModule,MatIconModule,MatSelectModule,
    FormsModule,
    MatGridListModule,MatButtonModule
  ]
})
export class AdminModule { }
