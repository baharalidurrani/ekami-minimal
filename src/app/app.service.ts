import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from './dog.model';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}
  endPoint = 'https://dog.ceo/api/breeds/image/random';

  hitEndPoint(): Observable<Dog> {
    return this.http.get<Dog>(this.endPoint);
  }
}
