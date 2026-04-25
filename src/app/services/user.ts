import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Iuser } from '../Models/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class User {

httpHeadres={}

  constructor(private http:HttpClient){
this.httpHeadres={
  headers:new HttpHeaders({
'Content-Type':'application/json',
// 'Authorization':token
  })
}
  }

  AddNewUser(newUser:Iuser):Observable<Iuser>{

    return  this.http.post<Iuser>(`${environment.baseUrl}users`,newUser,this.httpHeadres).pipe(retry(2))
  }
  
}
