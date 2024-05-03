import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  constructor(private http: HttpClient) { }

  getEstados(): Observable<any[]> {
    return this.http.get<any[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }
}
