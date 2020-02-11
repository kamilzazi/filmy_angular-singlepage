import { Injectable } from '@angular/core';
import { Film } from './modele/film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [];

  constructor(private http: HttpClient) { }

  wszystkieFilmy(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/filmy');
  }

  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
