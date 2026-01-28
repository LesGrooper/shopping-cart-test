import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.API).pipe(
      map(res => res.products)
    );
  }
}
