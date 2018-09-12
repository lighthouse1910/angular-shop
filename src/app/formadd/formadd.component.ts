import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formadd',
  templateUrl: './formadd.component.html',
  styleUrls: ['./formadd.component.scss']
})
export class FormaddComponent implements OnInit {
  listImg;
  category;
  constructor() {
    this.listImg = [
      { name: 'ao nam 1', imgUrl: './assets/images/ao-nam-1.jpg' },
      { name: 'ao nam 2', imgUrl: './assets/images/ao-nam-2.jpg' },
      { name: 'ao nam 3', imgUrl: './assets/images/ao-nam-3.jpg' },
      { name: 'ao nam 4', imgUrl: './assets/images/ao-nam-4.jpg' },
      { name: 'ao nu 1', imgUrl: './assets/images/ao-nu-1.jpg' },
      { name: 'ao nu 2', imgUrl: './assets/images/ao-nu-2.jpg' },
      { name: 'ao nu 3', imgUrl: './assets/images/ao-nu-3.jpg' },
      { name: 'ao nu 4', imgUrl: './assets/images/ao-nu-4.jpg' }
    ];
    this.category = ['male', 'female'];
  }

  ngOnInit() {}
}
