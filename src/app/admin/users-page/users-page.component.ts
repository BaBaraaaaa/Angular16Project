import { AuthService } from '../../services/user/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  constructor(private checklogout : AuthService){}
  logout()
  {
  // this.checklogout.logout();


  }

}
