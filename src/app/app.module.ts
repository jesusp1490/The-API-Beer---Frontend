import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'; // Importa el componente navbar
import { BeerService } from './services/beer.service'; // Importa el servicio beer

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
