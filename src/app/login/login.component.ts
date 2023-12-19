import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgControl, NgModel, NgForm  } from '@angular/forms';
import { AuthService } from '../services/user/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { UserService } from '../services/user/-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginF: FormGroup = new FormGroup(
    {
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    }

    );
    constructor(private auth :AuthService, private fb:FormBuilder,private router: Router,private  userService: UserService
      ,private toastr: ToastrService )
    {}

    onSubmit(): void {

      this.userService.login(this.loginF.value).subscribe((res: any)=>
      {
        if (res == null) {
         this.toastr.error('lỗi rồi',"",{
          timeOut: 3000
          ,positionClass: 'toast-bottom-right',

         })
        } else if (res != null) {
          // console.log(res);
          // alert("đăng nhập thành công!");
          this.toastr.success('đăng nhập thành công!',"",{
            timeOut: 3000
            ,positionClass: 'toast-bottom-right',
           });
          let jsonData = JSON.stringify(res);
          // sessionStorage.setItem('user',jsonData);
          this.auth.setUser(res);
          this.auth.setRoles(res.role);
          let a : boolean = this.auth.getRoles();
          if(a)
          {
            this.router.navigateByUrl('/admin/dashboard')
          }
          else
          {
            this.router.navigateByUrl('')
          }

        }
      },
      (    error: HttpErrorResponse) => {
        if(error.status == 400
          )
        {
          console.error('Error:', error.error);
          // alert(error.error)
          this.toastr.error(error.error,"",{
            timeOut: 3000
            ,positionClass: 'toast-bottom-left',

           });
        }

      }
    );
    }
    loginf(loginForm: NgForm)
    {
    console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe(
    (res:any)=>{
      console.log(res);
      this.auth.setRoles(res.role);
      this.toastr.success('đăng nhập thành công!',"",{
        timeOut: 3000
        ,positionClass: 'toast-bottom-right',
       });
       this.auth.setUser(res);
      const role = res.role;
      if (role ==="Admin")
      {
        this.router.navigateByUrl('/admin')

      }
      else
      {
        this.router.navigateByUrl('')
      }

    })
    }

}

