import { Injectable } from '@angular/core';
import { ShowItemComponent } from './show-item/show-item.component';
@Injectable({
  providedIn: 'root'
})
export class CartSvService {
  arrayItems;
  constructor() {}
  add(arrItem) {
    this.arrayItems = arrItem;
  }
}
