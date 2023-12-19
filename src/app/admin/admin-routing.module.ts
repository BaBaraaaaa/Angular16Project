import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AddProductComponent } from './product/add-product/add-product/add-product.component';
import { EditComponent } from './product/edit-product/edit.component';
import { OderComponent } from './oder/oder.component';
import { ManagerUserComponent } from './manager-user/manager-user.component';


const routes: Routes = [
  {path:'',component:AdminComponent,
children:[
  {path:'dashboard',component:DashboardComponent},
  {path:'products',component:ProductComponent},
  {path:'category',component:CategoryComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'edit-product/:id',component:EditComponent},
  {path:'order',component:OderComponent},
  {path:'manager-user',component:ManagerUserComponent}



]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
