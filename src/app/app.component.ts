import { Component, OnInit } from '@angular/core';
import { BeerService } from './services/beer.service';
import { Beer } from './models/beer.model';

@Component({
  selector: 'app-root',
  templateUrl: '../app/app.component.html',
  styleUrls: ['../app/app.component.scss']
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
    this.beerService.getBeer().subscribe((beer: Beer) => {
      this.beer = beer;
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
