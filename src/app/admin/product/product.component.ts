import { animate } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowproductImgaeDialogComponent } from 'src/app/admin/product/showproduct-imgae-dialog/showproduct-imgae-dialog.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products :any;

  constructor(private prod: ProductsService,private router: Router,private toast : ToastrService
    ,public imagesDialog : MatDialog){

  }
  public getAllProduct()
  {
    this.prod.getAllProduct().subscribe
    ((res : any)=>
    {
      this.products = res
    })
  }
  ngOnInit(): void {
    this.getAllProduct();

  }
  editProduct(id: number)
  {
    console.log(id);
  //sử dụng router Active để lấy trên url =>id
    this.router.navigate(['admin/edit-product',id])

  }
  deleteProd(id: any):void
  {
    this.prod.deleteProduct(id).subscribe(
     (res) =>
     {

     },(error :HttpErrorResponse)=>
     {
      if(error.status == 200)
      {
        this.toast.success("đã xóa sản phẩm","",{
          timeOut:1000
        })
        this.getAllProduct();

      }
     }
    );

  }
  showImages(prod: Product)
  {
    console.log(prod);
    this.imagesDialog.open(ShowproductImgaeDialogComponent,
      {
        data: {
          product: prod
        },
        height: '1000px',
        width : '1000px'
      });


  }


}
