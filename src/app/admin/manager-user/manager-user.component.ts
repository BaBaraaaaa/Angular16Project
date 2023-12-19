import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';


@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.css']
})
export class ManagerUserComponent implements OnInit {

  ListUser: any;

  constructor(private AdminS: AdminServiceService ){}
  ngOnInit(): void {
  this.getAllUser();
  }
  public getAllUser()
  {
    this.AdminS.getAllUser().subscribe((res :any) =>{
     this.ListUser = res;
    console.log(this.ListUser);

    })
  }




}
