import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = 'http://localhost:8080/api/v1/user';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }
  //get All User
  public getAllUser()
  {
    return this.http.get(`${api}`);
  }
  //change profile
  public changeprofileByUser_id(id: number,body: any)
  {
    return  this.http.put(`${api}/${id}`,body);
  }

}
