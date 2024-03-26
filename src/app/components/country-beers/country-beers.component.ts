import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../../models/beer.model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-country-beers',
  templateUrl: './country-beers.component.html',
  styleUrls: ['./country-beers.component.scss']
})
export class CountryBeersComponent implements OnInit {
  countryName: string | null = null;
  beers: Beer[] = [];

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName');
      if (this.countryName) {
        this.loadBeersByCountry(this.countryName);
      }
    });
  }

  loadBeersByCountry(countryName: string): void {
    this.beerService.getBeersByCountry(countryName).subscribe(beers => {
      this.beers = beers;
    });
  }
}
