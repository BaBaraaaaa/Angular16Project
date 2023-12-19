import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/product/products.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  user:any;
  order: Order = {
    total: 0,
    payment_Method: 'Giao Nhận Tiền Mặt',
    status: '',
    full_name: '',
    country: '',
    address: '',
    phone: '',
    email: '',
    note: ''
  } ;
  product: any ;
  constructor(private userS:AuthService, private orderS : OrderService, private toast : ToastrService
    ,private   prodS: ProductsService, private cartS: CartService) {}
  ngOnInit(): void {
  this.GetUser();
  this.getAllProductinCartByUserId();
  this.countCheck();
  }


  public GetUser()
  {
  this.user =  this.userS.getUser();


  console.log(this.user);

  }
  public checkout(checkoutF : NgForm)
  {
    console.log(this.order);

    if(this.order.full_name == '' || this.order.country =='' || this.order.address === ''||
    this.order.phone == ''|| this.order.email === '')
    {  this.toast.error("Chưa nhập đủ các thông tin ","",{
      timeOut: 1000
      ,positionClass: 'toast-bottom-right',
     }
    );
    return;

    }
  console.log(this.user.id);
 this.orderS.saveOrderByid(this.user.id,this.order).subscribe((res) =>
 {
  console.log(res);

 })
  }

  public getAllProductinCartByUserId()
  {
   console.log(this.user.id);
    this.cartS.getCartByUserId(this.user.id).subscribe((res)=>
    {
   this.product = res;
    console.log(this.product);

    }
    )
  }
  public  countCheck()
  {
    let count =  1;
    console.log(this.product);

   for (let index = 0; index < this.product.length; index++) {
    count = count +  this.product[index].price;
    console.log(this.product[index].productName);


   }
    console.log(count);

  }
}
