import { Toast, ToastrService } from 'ngx-toastr';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ParsedProperty } from '@angular/compiler';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  constructor(private cate: CategoryService,private toast : ToastrService ){}
  ngOnInit(): void {
   this.getAllcategory();

  }
  binding:any

  category_Name = new FormControl('');
  category: any[] = [];  // Đảm bảo định dạng đúng cho mảng của bạn

  UpdateCate(id:any){}
  AddCate(){

  console.log(this.category_Name.value);
      if(this.category_Name.value =="")
      {
        alert("lỗi má");
        return;
      }
      else
      {
        const body = {
          name: this.category_Name.value
        }
       this.cate.CreateCategory(body).subscribe((res : any)=>
    {
        this.toast.success("đã thêm danh mục","",
        {
          timeOut:1000
        })
        this.getAllcategory();
    })
      }

  }
 // Định nghĩa  inject(CategoryService) để lấy dữ liệu từ CategoryService
   public getAllcategory()
   {this.cate.getAllCategory()
    .subscribe((res: any)=>
    {
      this.category = res
    });

   }

  // Định nghĩa một hàm xử lý sự kiện
  onInputChange(event: Event) {
    // Lấy giá trị từ sự kiện input
    const inputValue = (event.target as HTMLInputElement).value;
    // Cập nhật giá trị của FormControl
    this.category_Name.setValue(inputValue);
  }
//xóa category

XoaCate(id:any){

  const DelCate = this.cate.DeleteCategory(id).subscribe((res: any)=>
 {
  this.toast.success('đã xóa',"",{
    timeOut:1000
  })
  this.getAllcategory();


 },(error:HttpErrorResponse)=>{
  if(error.status ==200)
  {
    this.toast.success('đã xóa danh mục',"",{
      timeOut:1000
    })
    this.getAllcategory();
  }
 } );

}
}
