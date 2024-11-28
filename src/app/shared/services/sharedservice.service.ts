import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as data from '../../../mocks/data.json';
import { delay, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor() { }

  http = inject(HttpClient);

  getDummyData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.com/todo');
  }

  getUserData(): Observable<any>{
    return of(data).pipe(delay(5000));
  }
}
