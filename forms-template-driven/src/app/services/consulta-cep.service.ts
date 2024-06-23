import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DadosCep } from '../models/dados-do-cep.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  private readonly API_URL = environment.apiCepUrl;

  constructor(private http: HttpClient) { }

  buscarCep(cep: string): Observable<DadosCep>{
    const jsonUrl = this.API_URL + cep + "/json"
    return this.http.get<DadosCep>(jsonUrl);
  }
}
