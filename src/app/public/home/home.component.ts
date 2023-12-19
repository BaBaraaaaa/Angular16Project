import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { ProductsService } from 'src/app/services/product/products.service';
import { Product } from 'src/app/models/product.model';
import { ShowproductImgaeDialogComponent } from 'src/app/admin/product/showproduct-imgae-dialog/showproduct-imgae-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  products : any[] = [];
  user : any;
  checkRole:boolean = false;
  checkUser : boolean = false;
  constructor( private auth: AuthService, private prod: ProductsService,private imagesDialog : MatDialog){}
  p: number = 1;
  itemsPerPage : number = 3;
  totalProduct: any;

  ngOnInit(): void {
this.user = this.auth.getUser();
    this.getAllProduct();
  };
  public getAllProduct()
  {
    this.prod.getAllProduct().subscribe((res)=>{
      this.products = res;
      this.totalProduct = res.length;
      // console.log(this.products);
      });
  }
  public onAddtoCart(id: number)
  {
    let data = {
      id : id,
      user_id :this.user.id
    }

    this.prod.addProductToCart(data).subscribe((res)=>
    {

        console.log(res);
        alert(res);


    },(err: HttpErrorResponse)=>
    {if(err.status == 200)
      {
        console.log(err);
        alert("thêm vào giỏ hàng thành công");
      }
    })
  }
  showImages(prod:Product)
  {
    console.log(prod);
    this.imagesDialog.open(ShowproductImgaeDialogComponent,
      {
        data: {
          product: prod
        },
        height: '500px',
        width : '800px'
      });


  }

}
