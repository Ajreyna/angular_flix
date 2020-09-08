import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly URL = 'https://ce-authenticated-backend.herokuapp.com/publicapi/movies';
  constructor(private httplient: HttpClient) { }

  get(): Promise<any[]>{
    return this.httplient.get<any[]>(this.URL ).toPromise();
  }

  post(movie: any): Promise<any> {
    return this.httplient.post<any>(this.URL, movie).toPromise();
  }
}
