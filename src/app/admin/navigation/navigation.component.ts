import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/public/home/home.component';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {


  constructor(private login:AuthService,private router: Router){}
  logout()
  {
    this.login.clear();
    this.router.navigate(['/'])
  }

}
