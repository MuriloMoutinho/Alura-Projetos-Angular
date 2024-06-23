import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  buscar(texto: string): Observable<LivrosResultado> {
    let params = new HttpParams().set('q', texto);

    return this.http.get<LivrosResultado>(this.API, { params: params });
   /* .pipe(
      map(resultado => resultado.items ?? []),
    );*/
  }
}
