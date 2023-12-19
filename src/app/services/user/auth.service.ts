
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const api = 'http://localhost:8080/api/v1/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ,private router : Router) { }

  public setRoles(roles: any)
  {
    localStorage.setItem('roles',JSON.stringify(roles));
    console.log(roles);

  }

  public getRoles()
  {  const a =  localStorage.getItem('roles');
    if(a !==null)
    {
      return JSON.parse(a);
    }
  }

  public clear()
  {
    localStorage.clear();
  }
  public isLoggedIn()
  {
    return this.getRoles();
  }
  public setUser(user:any)
  {
    localStorage.setItem('user',JSON.stringify(user));

    console.log(user);


  }
  public getUser()
  {
    const a =  localStorage.getItem('user');
    if(a !==null)
    {
      return JSON.parse(a);
    }
  }
}
