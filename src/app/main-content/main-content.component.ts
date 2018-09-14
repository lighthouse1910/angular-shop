import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartSvService } from '../cart-sv.service';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input()
  sidenav: boolean;
  @Output()
  op: EventEmitter<any> = new EventEmitter();
  constructor(private cartsv: CartSvService) {}
  currCart;
  ngOnInit() {
    this.currCart = this.cartsv.arrayItems.length;
    console.log(this.cartsv.arrayItems.length);
  }
  toggle_sidenav() {
    this.op.emit(this.sidenav);
  }
}
