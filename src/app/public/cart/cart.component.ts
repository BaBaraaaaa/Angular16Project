import { Product } from './../../models/product.model';

import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/product/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent  implements OnInit{
  user : any;
  products: any[] = [];
  cart: any;
  TongGia: number = 0;
  sl: number = 0;
  constructor(private auth : AuthService,private app : CartService,private prod: ProductsService, private toast : ToastrService){}


  ngOnInit(): void {
    this.user = this.auth.getUser();
  this.getProductInCart();
  }
  public getProductInCart()
  {
    this.app.getCartByUserId(this.user.id).subscribe((res)=>
    {
      this.cart = res;
      console.log(this.cart);
      for(var a of this.cart)
      {
        this.prod.getProductById(a.product_id).subscribe((res:Product) => this.products.push(res))
      }
    });
  }



  public onDeleteProductInCart(id :  number)
  {
  let data = {
    id : id,
    user_id : this.user.id
  }
  this.app.deleteProductInCartByUser_Id(data).subscribe((res)=>
  {

  },(error:HttpErrorResponse)=>
  {
    if(error.status ===200)
    {
      this.toast.success('đã xóa sản phẩm khỏi giỏ hàng',"",{
        timeOut: 1000
      })
    }

  })
  }
  oncountCart()
  {

  }
  onChange(event : any ,i : any,item:any): any
  {
    const newCount = +event.target.value;
    item.count = newCount;
    item.totalPrice = item.price *newCount;
    this.sl= newCount;

    let data = {
      id : item,
      user_id :this.user.id
    }
    this.prod.addProductToCart(data).subscribe((res: any)=>
    {
      console.log(res.text);
      alert(res);
    })

    console.log(this.sl);

  }



}
