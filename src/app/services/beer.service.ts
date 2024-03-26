import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.model'; 

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getBeersByCountry(countryName: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`/api/beers?country=${countryName}`);
  }
}
