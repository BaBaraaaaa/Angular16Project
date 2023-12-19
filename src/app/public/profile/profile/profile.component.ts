import { FileHandle } from 'src/app/models/file-handle.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user/-user.service';
import { AuthService } from 'src/app/services/user/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/models/user.model';
import { AdminServiceService } from 'src/app/services/admin-service.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user : any = {
    user_name: '',
    email: '',
    full_name: '',
    phone_number: '',
    avatar: [],
    password: ''
  }
  current_password : string = '';
  confirm_password : string ='';
  constructor(private AdminSrv : AdminServiceService
    ,private sanitizer: DomSanitizer
    ,private auth: AuthService){}

  ngOnInit(): void {
  this.user = this.auth.getUser();

  }
  prepareFromData(User: any)
  {
    const formData = new FormData();
    formData.append('user',new Blob([JSON.stringify(User)],{
      type: 'application/json'
    }));

    for (let i = 0; i < this.user.avatar.length; i++) {
      formData.append('image',
      this.user.avatar[i].file,this.user.avatar[i].file.name );
    }
  }
  changeProfileNoImage(updateProF: NgForm)
  {
    console.log(this.user.id);
    let id = this.user.id;
    console.log(updateProF.value);
   const userFormData =  this.prepareFromData(updateProF.value)

    this.AdminSrv.changeprofileByUser_id(id,userFormData).subscribe((res) =>
    {
      console.log(res);

    })

  }


  onFileSelected(event: any)
  {
    if(event.target.files)
    {
      const file = event.target.files[0];
      const fileHandle : FileHandle =
      {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      console.log(fileHandle.url);
    }
  }

}
