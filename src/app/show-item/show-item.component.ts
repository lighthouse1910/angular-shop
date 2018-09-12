import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../main-content/item.model';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {
  @Input()
  items: Item[];
  constructor() {
    this.items = [
      new Item('abczyx', './assets/images/ao-nam-1.jpg', '1000k', 'male'),
      new Item('abcasd', './assets/images/ao-nam-2.jpg', '1100k', 'male'),
      new Item('name 3', './assets/images/ao-nu-1.jpg', '1200k', 'female'),
      new Item('name 4', './assets/images/ao-nu-2.jpg', '1300k', 'female')
    ];
  }
  currItems;
  ngOnInit() {
    return (this.currItems = this.items);
  }

  getAll() {
    return (this.currItems = this.items);
  }
  filter(n) {
    return (this.currItems = this.items.filter(x => x.category === n));
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
