import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes'; 
import { AppComponent } from '../app/app.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component'; 
import { BeerService } from '../app/services/beer.service'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent // Añade el componente navbar a las declaraciones
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // Importa tus módulos de rutas si los tienes
  ],
  providers: [BeerService], // Añade el servicio beer a los proveedores
  bootstrap: [AppComponent]
})
export class AppModule { }
