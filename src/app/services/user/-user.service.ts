import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
const api = 'http://localhost:8080/api/v1/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,private auth: AuthService) { }
  //signin
  login(loginData: any)
  {

    return this.httpClient.post<any>(`${api}/login`,loginData);

  }
  public roleMatch(allowedRole: string): boolean
  {
    let isMatch = false;
   const UserRoles  =  this.auth.getRoles();


   if(UserRoles != null && UserRoles)
   {
    if(UserRoles === allowedRole)
    {
      isMatch = true;
      return isMatch;
    }
   }
   return false;


  }
    //signin
    register(loginData: any)
    {
      return this.httpClient.post<any>(`${api}/registerUser`,loginData);
    }



}
