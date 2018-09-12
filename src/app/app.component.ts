import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularShop';
  sidenav = true;
  toggle_sidenav() {
    this.sidenav = !this.sidenav;
  }
  constructor() {}
}
