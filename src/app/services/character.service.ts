import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    const url = 'https://rickandmortyapi.com/api/character';
    return this.http.get<any>(url);
  }
}
