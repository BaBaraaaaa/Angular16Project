import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order.model';
const api = 'http://localhost:8080/api/v1/order/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  public saveOrderByid(id: number, body: Order)
  {
    return this.http.post(`${api}`+ id ,body);
  }
  public getAllOrder()
  {
    return this.http.get(`${api}`);
  }
}
