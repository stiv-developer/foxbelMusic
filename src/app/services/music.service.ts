import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class MusicService {

  // private baseUrl:string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  buscarCancion(termino: string): Observable<any>{
    const url = `https://api.deezer.com/search/?q=${termino}`;

    
    return this.http.get<any>(url);
  }
      // const url = `https://api.deezer.com/album/${termino}`;

    // const url = `https://api.deezer.com/search/?q=${termino}`;
    // const url = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?limit=1&q=${termino}`;
    // const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=`;

    // const url = `https://restcountries.eu/rest/v2/name/${termino}`;
}