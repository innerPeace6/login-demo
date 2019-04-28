import { Fruit } from './fruit';
import { FRUITS } from './mock-fruits';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruits(id?: any): Observable<Fruit[]> {
    return of(FRUITS);
  }
  constructor() { }
}
