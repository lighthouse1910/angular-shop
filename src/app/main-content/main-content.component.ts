import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() {}
  ngOnInit() {}
  toggle_sidenav() {
    this.op.emit(this.sidenav);
  }
}
