import { Component, OnInit } from '@angular/core';
import { CartSvService } from '../cart-sv.service';
import { IClothes } from '../app.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: IClothes[] = [];

  constructor(private cartSvc: CartSvService) {}

  ngOnInit() {
    this.cartSvc.arrItem = this.items;
  }
}
