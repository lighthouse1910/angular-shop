import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input()
  sidenav: boolean;
  @Input()
  items: Item[];
  @Output()
  op: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.items = [
      new Item('name 1', './assets/images/ao-nam-1.jpg', '1000k', 'male'),
      new Item('name 2', './assets/images/ao-nam-2.jpg', '1100k', 'male'),
      new Item('name 3', './assets/images/ao-nu-1.jpg', '1200k', 'female'),
      new Item('name 4', './assets/images/ao-nu-2.jpg', '1300k', 'female')
    ];
  }
  currItems;
  ngOnInit() {
    return (this.currItems = this.items);
  }
  toggle_sidenav() {
    this.op.emit(this.sidenav);
  }
  getAll() {
    return (this.currItems = this.items);
  }
  filter(n) {
    return (this.currItems = this.items.filter(x => x.category === n));
  }
}
