import { User } from './../models/user.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../services/user/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user/-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user : User =
  {
    user_name: '',
    password: '',
    email: '',
    full_name: '',
    phone_number: '',
    avatar: []
  }
  comfirm_password : string = '';
  isCorrect = true;
  constructor(private auth: AuthService,private router:Router,private toast : ToastrService,
    private userService : UserService ){}


  register(registerForm: NgForm)
  {
if (this.user.password !== this.comfirm_password) {
  this.isCorrect = false;
this.toast.error("mật khẩu không giống nhau !!!")
} else {
  this.isCorrect = true;
  }
  console.log(registerForm.value);

    this.userService.register(registerForm.value).subscribe((res)=>
    {
      this.auth.setUser(res);
      this.auth.setRoles(res.roles[0].name);
      const role = res.role;
      if (role ==="Admin")
      {
        this.router.navigateByUrl('/admin')

      }
      else
      {
        this.router.navigateByUrl('')
        this.toast.success('tạo tài khoản thành công',"",{
          timeOut:2000
        })
      }
    },(err:HttpErrorResponse)=>{
      this.toast.error(err.error,"",{
        timeOut:1000
      });
    })

  }


}
