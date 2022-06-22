import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<any> {
    const url = 'https://rickandmortyapi.com/api/episode';
    return this.http.get<any>(url);
  }
}
