import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormaddComponent } from './formadd/formadd.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowItemComponent } from './show-item/show-item.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: ShowItemComponent
  },
  {
    path: 'form',
    component: FormaddComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainContentComponent,
    FormaddComponent,
    ShowItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
