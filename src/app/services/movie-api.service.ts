import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private readonly API_KEY = 'c26c3408e8f9475df7ea95082023bb33';
  private readonly URL = 'https://api.themoviedb.org/3/search/multi'
  constructor(private httpClient: HttpClient) { }

  get(searchTerm: string): Promise<any> {
    const params: HttpParams = new HttpParams().append('api_key', this.API_KEY)
    .append('query', searchTerm);

    return this.httpClient.get<any[]>(`${this.URL}`, {params}).toPromise();
  }
}
