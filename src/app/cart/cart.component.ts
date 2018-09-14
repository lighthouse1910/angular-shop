import { Component, OnInit } from '@angular/core';
import { CartSvService } from '../cart-sv.service';
import { IClothes } from '../app.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: IClothes[];
  total;
  count;
  constructor(private cartSvc: CartSvService) {}

  ngOnInit() {
    this.items = this.cartSvc.arrayItems;
    this.totalPrice();
    // this.count = this.items.length;
  }
  totalPrice() {
    const priceArr = this.items.map(x => x.price);
    this.total = priceArr.reduce(function(sum, num) {
      return sum + num;
    }, 0);
    return this.total;
  }
}
