import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingrediente } from './ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  private apiUrl = 'http://localhost:8080/ingredientes';

  constructor(private http: HttpClient) { }
  getIngredientes(): Observable<Ingrediente[]>{
    return this.http.get<Ingrediente[]>(this.apiUrl);
  }


}
