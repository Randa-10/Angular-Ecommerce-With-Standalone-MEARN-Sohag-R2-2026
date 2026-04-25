import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsDynamic {
  constructor(private http: HttpClient) {}

  getAllProduct():Observable<Iproduct[]> {
    //this.http.method<generic>(url ,body,headers).pipe(operators)
    return this.http.get<Iproduct[]>(`${environment.baseUrl}products`);
  }

  getProductById(Id:number): Observable<Iproduct> {
    //http://localhost:3000/
    return this.http.get<Iproduct>(`${environment.baseUrl}products/${Id}`);
  }

  //query string

  FilterByName(vaule: string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${environment.baseUrl}products?productName=${vaule}`);
  }
}
