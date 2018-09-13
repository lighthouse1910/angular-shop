import { Injectable } from '@angular/core';
import { ShowItemComponent } from './show-item/show-item.component';
@Injectable({
  providedIn: 'root'
})
export class CartSvService {
  public arrItem;
  constructor() {}
  public add(arrItem) {
    this.arrItem = arrItem;
  }
}
