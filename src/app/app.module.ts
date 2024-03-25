import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes'; 
import { AppComponent } from '../app/app.component';
import { BeerService } from '../app/services/beer.service'; 
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule
  ],
  providers: [BeerService], 
  bootstrap: [AppComponent],

})
export class AppModule { }
