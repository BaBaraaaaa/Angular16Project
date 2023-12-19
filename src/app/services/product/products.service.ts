import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';

const api = 'http://localhost:8080/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient){}
  //productService
     public getAllProduct():Observable<Product[]>
     {
       // console.log( this.http.get(`${api}product`));
         return this.http.get<Product[]>(`${api}product`)
     }

     public addProductToCart( data :any)
     {
       return this.http.get(`${api}cart/${data.id}/${data.user_id}`);
     }
    //create Product
    public createProduct(product:FormData) {
      return this.http.post(`${api}product/CreateProduct`, product);
    }
    //Update Product
    public UpdateProduct(id:number,Product: FormData)
    {
      return this.http.put(`${api}product/${id}`,Product);
    }

    //Delete Product
     public deleteProduct(id: any)
     {
      return this.http.delete(`${api}product/${id}`);
     }
     public getProductById(productId:number) :Observable<any>
     {
      return this.http.get(`${api}product/${productId}`);
     }

     //get productImage
     public getImageByproductId(id:number) :Observable<any>
     {
      return this.http.get(`${api}productImage/${id}`);
     }
     //delete productImage by productID
     public deleteImageByproductId(id : number)
     {
      return this.http.delete(`${api}productImage/${id}`);
     }

}
