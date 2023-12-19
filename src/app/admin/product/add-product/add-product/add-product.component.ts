import { Product } from '../../../../models/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, NgModel,FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { FileHandle } from 'src/app/models/file-handle.model';

import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  listCate : any;
  productF: FormGroup  = new FormGroup({});
   formData: FormData = new FormData ;
    fileName = '';
    product : Product =
    {  productName: "",
    description:"",
    price:0,
    category_id:0,
    quantity:0,
    productImage: []
  }

// listImage: FileList = new FileList;
  constructor(private prodSv: ProductsService,private cate: CategoryService,private fb:FormBuilder
    ,private sanitizer: DomSanitizer, private toast : ToastrService){ }
  ngOnInit(): void {


  this.cate.getAllCategory().subscribe((res: any)=>
    {
      this.listCate = res;
      console.log(this.listCate);
    });
  }
  onFileSelected(event:any)
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
    }

  }
  removeImage(i : number)
  {
  this.product.productImage.splice(i,1);

  }

  addProduct(productForm: NgForm)
  {
    if(this.product.category_id===0 || this.product.description ===""
    ||this.product.price === 0 || this.product.productImage.length ===0
    || this.product.productName === "")
    {
      this.toast.error("Chưa nhập đủ các thông tin sản phẩm","",{
        timeOut: 1000
        ,positionClass: 'toast-bottom-right',
       }
      );
      return;
    }
   const productFormData =  this.prepareFromData(this.product)
    console.log(this.product);
    this.prodSv.createProduct(productFormData).subscribe(
      (res) =>{
        productForm.reset()
        this.product.productImage = [];
      },(error:HttpErrorResponse)=>
      {
       if(error.status ===200)
       {
        productForm.reset()
        this.product.productImage = [];
        this.toast.success('đã thêm sản phẩm',"",{
          timeOut:3000
        })
       }
        console.log(error);

      }
    )
  }
  prepareFromData(product: Product):FormData
  {
    const formData = new FormData();
    formData.append('product',new Blob([JSON.stringify(product)],{
      type: 'application/json'
    }));
    for (let i = 0; i < product.productImage.length; i++) {
      formData.append('imageFile',
      product.productImage[i].file,product.productImage[i].file.name
      );
    }
    return formData;
  }
  selectCategory(id: number): void {
    this.product.category_id = id;
  }

}
