import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';

import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  user: any;
  showitemincart : boolean = false;
  products: any[] = [];
  prodInCate  : any[] = [];
  category : any;
  constructor(private login: AuthService ,private app : CategoryService, private prod: ProductsService){}
  ngOnInit(): void {

    this.user = this.login.getUser();
this.getAllCategory();
this.getAllProdcut();
  };
  public getAllCategory()
  {
    this.app.getAllCategory().subscribe((res: any)=>
    {
      this.category = res;
    })
  }
  public getAllProdcut()
  {
    this.prod.getAllProduct().subscribe((res: any)=>{
      this.products = res;

    });
  }
  onClick(id: number)
  {
    console.log(this.prodInCate);

    this.showitemincart = true;
    this.prodInCate = [];
      for(var b of this.products)
      {
        if(b.categoryId == id)
        {
          this.prodInCate.push(b); // Thêm sản phẩm vào mảng this.prodInCate
          console.log(this.prodInCate);

        }
      }


  }
  public onAddtoCart(id: number)
  {
    let data = {
      id : id,
      user_id :this.user.id
    }

    this.prod.addProductToCart(data).subscribe((res: any)=>
    {

        console.log(res.text);
        alert(res);


    },(err: HttpErrorResponse)=>
    {
      if(err.status == 200)
      {
        console.log(err);
        alert("thêm vào giỏ hàng thành công");
      }
      console.error(err);
    })
  }

}
