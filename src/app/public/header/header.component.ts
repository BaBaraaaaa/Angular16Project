import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { UserService } from 'src/app/services/user/-user.service';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  hidden = false;
  isLogined : boolean = false;
  user : any;

  // checkRole:boolean = this.loginSrv.checkRole();
  constructor( private auth: AuthService , private route : Router,public userService :UserService,
    private cateService : CategoryService){}
  ngOnInit(): void {
    this.user = this.auth.getUser();

  }
  public isLoggedIn()
  {
    return this.auth.isLoggedIn();
  }


  public onLogout()
  {
    this.auth.clear();
    this.route.navigate(['/home'])


  }
  onBackHome(): any
  {
   this.route.navigate(['/']);
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


}
