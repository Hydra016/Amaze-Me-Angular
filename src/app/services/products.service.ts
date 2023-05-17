import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Product } from '../Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl:string = 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl)
  } 
}
