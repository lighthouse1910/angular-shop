import { Injectable } from '@angular/core';
import { ShowItemComponent } from './show-item/show-item.component';
@Injectable({
  providedIn: 'root'
})
export class CartSvService {
  arrayItems;
  cartNum = 0;
  constructor() {}
  add(arrItem) {
    this.arrayItems = arrItem;
  }
}
