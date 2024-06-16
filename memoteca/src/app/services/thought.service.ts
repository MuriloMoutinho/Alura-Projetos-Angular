import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { INewThought, IThought } from '../models/thought.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listAll(): Observable<IThought[]>{
    return this.http.get<IThought[]>(this.API_URL);
  }

  createThought(thought: INewThought): Observable<IThought>{
    return this.http.post<IThought>(this.API_URL, thought);
  }

  deleteThought(idThought: number): Observable<IThought>{
    const deleteUrl = `${this.API_URL}/${idThought}`
    return this.http.delete<IThought>(deleteUrl);
  }

  editThought(thought: IThought): Observable<IThought>{
    const editUrl = `${this.API_URL}/${thought.id}`
    return this.http.put<IThought>(editUrl, thought);
  }

    getById(idThought: number | string): Observable<IThought>{
    const getUrl = `${this.API_URL}/${idThought}`
    return this.http.get<IThought>(getUrl);
  }

}
