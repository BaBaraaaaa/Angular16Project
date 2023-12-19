import { literalMap } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css']
})
export class OderComponent implements OnInit {
user:any;
ListOrder : any;
p: number = 1;
itemsPerPage : number = 3;
constructor(private orderS : OrderService){}
  ngOnInit(): void {
  this.getAllUserOrder();
  }

  public getAllUserOrder()
  {
    this.orderS.getAllOrder().subscribe((res) =>
    {
    this.ListOrder = res;
    console.log(this.ListOrder);
    }
     )


  }

}
