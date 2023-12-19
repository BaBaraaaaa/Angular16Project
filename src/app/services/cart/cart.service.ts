import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = 'http://localhost:8080/api/v1/cart/';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

    //cartService
    public getCartByUserId(user_id:any)
    {
      return this.http.get(`${api}user/${user_id}`)
    }
    public deleteProductInCartByUser_Id(data: any)
    {
      return this.http.delete(`${api}${data.id}/${data.user_id}`);
    }

}
