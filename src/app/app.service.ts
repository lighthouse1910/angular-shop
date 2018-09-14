import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './main-content/item.model';
import { IClothes } from './app.model';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<IClothes[]> {
    return this.http.get<IClothes[]>(`${BASE_URL}items`);
  }
  addNewProduct(product: Partial<IClothes>): Observable<any> {
    if (!product.id) {
      product.id = uuid();
    }
    return this.http.post(`${BASE_URL}items`, product);
  }
}
