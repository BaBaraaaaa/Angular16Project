import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  LCate: any ;
  LUser: any ;
  LProd: any;

  constructor(private listCate: CategoryService,private listprod: ProductsService,private user: AuthService){}
  ngOnInit(): void {
   this.listCate.getAllCategory().subscribe(res =>{
    this.LCate =  res

   })
   this.listprod.getAllProduct().subscribe(res => this.LProd = res);

  }


}
