import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = 'http://localhost:8080/api/v1/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }



  public CreateCategory(name: any)
  {const headers = new HttpHeaders();
    headers.set(
      'Access-Control-Allow-Origin','*'
    );
    return this.http.post(`${api}`,name,{headers});
  }
  public DeleteCategory(id: any)
  {
    return this.http.delete(`${api}/${id}`);
  }
    //categoryService
    public getAllCategory()
  {
    // console.log( this.http.get(`${api}product`));
      return this.http.get(`${api}`);
  }
    public getProductInCartByUser_id(user_id:any)
    {
      return this.http.get(`${api}/user/${user_id}`);
    }
    public GetProductByCategoryid(id: any){
      return this.http.get(`${api}/product/${id}`);
    }
}
