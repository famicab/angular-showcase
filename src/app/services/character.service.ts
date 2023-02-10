import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, RootObject } from '../interfaces/Character';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl = environment.endpoint;
  constructor(private httpClient: HttpClient) { }

  recuperarPersonajes(): Observable<RootObject> {
    return this.httpClient.get<RootObject>(this.baseUrl);
  }
}
