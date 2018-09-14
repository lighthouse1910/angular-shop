import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormaddComponent } from './formadd/formadd.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowItemComponent } from './show-item/show-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './app.service';
const appRoutes: Routes = [
  {
    path: '',
    component: ShowItemComponent
  },
  {
    path: 'form',
    component: FormaddComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainContentComponent,
    FormaddComponent,
    ShowItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
