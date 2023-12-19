import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {  ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/product/products.service';
import { FileHandle } from 'src/app/models/file-handle.model';
import { EMPTY } from 'rxjs';
import { Image } from 'src/app/models/productImage.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit{
  listCate: any;
  product : Product =
  {  productName: "",
  description:"",
  price:0,
  category_id:0,
  quantity:0,
  productImage: []
}

  id: number  = 0;
  lImage : Image[] =[{
    id: 0,
    url_Image: '',
    product_id: 0
  }]
  isnew:boolean = false;

  constructor(private sanitizer: DomSanitizer,private LCate : CategoryService,private toast: ToastrService,
    private prod: ProductsService,private router: ActivatedRoute,private rout: Router){}
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
     this.LCate.getAllCategory().subscribe((res: any)=>
     {
      this.listCate = res;
     })

     this.getProductById();
    this.getAllproductImageByProductId();
  }
   public getProductById(){this.prod.getProductById(this.id).subscribe((res) =>{this.product = res
    this.product.productImage = []})}
  selectCategory(id : number)
  {
    this.product.category_id = id;
  }
  prepareFromData(product: Product):FormData
  {
    const formData = new FormData();
    formData.append('product',new Blob([JSON.stringify(product)],{
      type: 'application/json'
    }));

    for (let i = 0; i < this.product.productImage.length; i++) {
      formData.append('imageFile',
      this.product.productImage[i].file,this.product.productImage[i].file.name );
    }
    return formData;
  }
  public getAllproductImageByProductId()
  {

  this.prod.getImageByproductId(this.id).subscribe(res =>{
    if(res)
    {

      this.lImage = res;
      console.log(this.lImage);

    }
} )
  }
  editProduct(productForm : NgForm)
  {
    console.log(productForm.value);
    console.log(this.product);

    if(this.product.category_id===0 || this.product.description ===""
    ||this.product.price === 0
    || this.product.productName === "")
    {
      if(!this.lImage)
      {
        this.toast.error("Chưa nhập hình ảnh sản phẩm","",{
          timeOut: 1000
          ,positionClass: 'toast-bottom-right',
         }
        );
      }
      this.toast.error("Chưa nhập đủ các thông tin sản phẩm","",{
        timeOut: 1000
        ,positionClass: 'toast-bottom-right',
       }
      );
      return;
    }
   const productFormData =  this.prepareFromData(this.product)

    this.prod.UpdateProduct(this.id,productFormData).subscribe(
      (res) =>{

        this.rout.navigateByUrl('admin/products');
        this.toast.success('đã sửa sản phẩm',"",{
          timeOut:3000
          ,positionClass: 'toast-bottom-right',
        })


      },(error:HttpErrorResponse)=>
      {
       if(error.status ===200)
       {
        productForm.reset()
        this.product.productImage = [];
        this.toast.success('đã sửa sản phẩm',"",{
          timeOut:3000
          ,positionClass: 'toast-bottom-right',
        })

       }
        console.log(error);

      }
    )

  }
  onFileSelected(event: any)
  {
    console.log(this.product.productImage);

    console.log(event.target.files);
    if(event.target.files)
    {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      console.log(fileHandle.url);

      this.product.productImage.push(fileHandle);
      this.isnew = true
    }
  }
  removeImage(i : number)
  {
  this.product.productImage.splice(i,1);
  }
  removeImages(i : number)
  {
    console.log(i);
    this.prod.deleteImageByproductId(i).subscribe(res =>
      {

        this.toast.success('đã sửa sản phẩm',"",{
          timeOut:3000
          ,positionClass: 'toast-bottom-right',
        })
      })


  }

}
