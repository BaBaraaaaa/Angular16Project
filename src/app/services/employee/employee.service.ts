import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = 'http://localhost:8080/api/v1/category';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public add(body: any){}
  public edit(id: number){}
  // public delete(id: number) : Observable<number> {return id;}
  public showlist(){ return this.http.get(`${api}`)}
}
