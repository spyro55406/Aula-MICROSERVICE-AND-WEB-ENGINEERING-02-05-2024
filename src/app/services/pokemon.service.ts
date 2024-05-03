import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'http://demo8304640.mockable.io/'

  constructor(private http:HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
