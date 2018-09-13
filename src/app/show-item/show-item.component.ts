import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Item } from '../main-content/item.model';
import { IClothes } from '../app.model';
import { TestService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { CartSvService } from '../cart-sv.service';
@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {
  // items: Item[] = [
  //   new Item('abczyx', './assets/images/ao-nam-1.jpg', '1000k', 'male'),
  //   new Item('abcasd', './assets/images/ao-nam-2.jpg', '1100k', 'male'),
  //   new Item('name 3', './assets/images/ao-nu-1.jpg', '1200k', 'female'),
  //   new Item('name 4', './assets/images/ao-nu-2.jpg', '1300k', 'female')
  // ];
  items: IClothes[];
  carts: IClothes[] = [];
  constructor(private test: TestService, private cartSvc: CartSvService) {}
  currItems;
  clearSub;
  activeClass = 'all';
  ngOnInit() {
    this.getAll();
  }
  addToCart(item) {
    this.carts.push(item);
    this.cartSvc.add(this.carts);
    console.log(this.carts);
  }
  getAll() {
    this.activeClass = 'all';
    this.currItems = this.test
      .getAllProducts()
      .pipe()
      .subscribe(rs => (this.currItems = rs));
  }
  filter(n) {
    this.activeClass = n;
    return (this.currItems = this.test
      .getAllProducts()
      .pipe()
      .subscribe(rs => (this.currItems = rs.filter(x => x.category === n))));
  }
  search(text: HTMLInputElement) {
    if (text.value !== '') {
      return (this.currItems = this.items.filter(x =>
        x.name.includes(text.value)
      ));
    } else {
      return this.getAll();
    }
  }
}
