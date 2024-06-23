import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { INewThought, IThought } from '../models/thought.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listAll(page: number, textFilter?: string, onlyFavorites?: boolean): Observable<IThought[]> {
    const itemsByPage = 6;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', itemsByPage);

    if(!!onlyFavorites){
      params = params.set('isFavorite', true);
    }

    if (!!textFilter && textFilter.trim().length > 2) {
      params = params.set('q', textFilter);
    }

    return this.http.get<IThought[]>(this.API_URL, { params: params });
  }


  createThought(thought: INewThought): Observable<IThought> {
    return this.http.post<IThought>(this.API_URL, thought);
  }

  editThought(thought: IThought): Observable<IThought> {
    const editUrl = `${this.API_URL}/${thought.id}`;
    return this.http.put<IThought>(editUrl, thought);
  }

  favoriteThought(thought: IThought): Observable<IThought> {
    thought.isFavorite = !thought.isFavorite;
    return this.editThought(thought)
  }

  deleteThought(idThought: number): Observable<IThought> {
    const deleteUrl = `${this.API_URL}/${idThought}`;
    return this.http.delete<IThought>(deleteUrl);
  }

  getById(idThought: number | string): Observable<IThought> {
    const getUrl = `${this.API_URL}/${idThought}`;
    return this.http.get<IThought>(getUrl);
  }
}
