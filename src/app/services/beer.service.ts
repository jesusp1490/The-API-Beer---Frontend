import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.model'; 
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getBeer(): Observable<Beer> {
    // Aquí puedes realizar una llamada HTTP para obtener los datos de la cerveza
    // Por ahora, solo devolvemos un objeto Beer de ejemplo
    return of({
      _id: '66013d03109d75bc7d2ea60b',
      name: 'MAHOU Cinco Estrellas',
      category: 'Pale Lager',
      country: 'España',
      ingredients: ['Agua', 'malta de cebada', 'maíz', 'lúpulo'],
      price: 1.6,
      description: 'Una Pale Lager que se creó en 1969...',
      imageUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1711357188/vxb2xgjvtuspfa4ptjrr.jpg'
    });
  }
}
