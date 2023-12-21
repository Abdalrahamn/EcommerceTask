import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  // want to creat a var to store the data but with a behavior subject
  // so we can subscribe to it
  productNum : BehaviorSubject<number> = new BehaviorSubject(0);

  constructor( private _HttpClient: HttpClient) {}

  baisUrl: string = 'https://ecommerce.routemisr.com';

  getProducts():Observable<any> {
    return this._HttpClient.get(`${this.baisUrl}/api/v1/products`);
  }

  getProductById(id: any):Observable<any> {
    return this._HttpClient.get(`${this.baisUrl}/api/v1/products/${id}`);
  }
}
