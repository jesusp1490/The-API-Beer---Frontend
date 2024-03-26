import { Component, OnInit } from '@angular/core';
import { BeerService } from './services/beer.service';
import { Beer } from './models/beer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  beer: Beer | undefined;
  showNavbar = false;
  showDetails = false;

  constructor(private beerService: BeerService) {}

  ngOnInit() {
    this.fetchBeer();
  }

  fetchBeer() {
  const countryName = 'España'; // Aquí deberías obtener el país seleccionado
  this.beerService.getBeersByCountry(countryName).subscribe((beers: Beer[]) => {
    // Suponiendo que la API devuelve un array de cervezas
    // Aquí podrías hacer algo con las cervezas, por ejemplo, asignar la primera cerveza a this.beer
    this.beer = beers[0];
  });
}

  onMouseMove(event: MouseEvent) {
    this.showNavbar = event.clientY < 50;
  }

  scrollToDetails() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    this.showDetails = true;
  }
}
