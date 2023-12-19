import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ProductsService } from 'src/app/services/product/products.service';
import { AuthService } from 'src/app/services/user/auth.service';
@Component({
  selector: 'app-showproduct-imgae-dialog',
  templateUrl: './showproduct-imgae-dialog.component.html',
  styleUrls: ['./showproduct-imgae-dialog.component.css']
})
export class ShowproductImgaeDialogComponent implements OnInit {
  user : any;
  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private prod:ProductsService,
  private auth: AuthService){}
  
  listImage : any[] = [];
  p: number = 1;
  itemsPerPage : number = 3;
  totalImage: any;

 public product : any;
  ngOnInit(): void {
this.receiveImages();
this.user = this.auth.getUser();
this.totalImage = this.listImage.length;
console.log(this.totalImage);

  }

  receiveImages()
  {
    for (var a of this.data.product.productImage) {
      this.listImage.push(a);

      // console.log(a.url_Image);
    }
    this.product = this.data.product;
    console.log(this.product);
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
      console.error(err);
    })
  }

}
