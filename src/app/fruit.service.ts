import { HttpService } from './http.service';
import { Fruit } from './fruit';
import { FRUITS } from './mock-fruits';
import { Injectable } from '@angular/core';
import { Observable,of, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FruitService {
 
  getFruits(): Observable<Fruit[]> {
    return of(FRUITS);
  }

 
  constructor() { }

}
