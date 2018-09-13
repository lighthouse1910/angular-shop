import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { CartSvService } from '../cart-sv.service';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnChanges {
  @Input()
  sidenav: boolean;
  @Output()
  op: EventEmitter<any> = new EventEmitter();
  currCart = this.cartsv.cartNum;
  constructor(private cartsv: CartSvService) {}
  ngOnInit() {}
  toggle_sidenav() {
    this.op.emit(this.sidenav);
  }
  ngOnChanges() {   }
}
