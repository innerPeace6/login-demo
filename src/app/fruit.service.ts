// import { HttpService } from './http.service';
import { Fruit } from './fruit';
import { FRUITS } from './mock-fruits';
import { Injectable } from '@angular/core';
import { Observable,of, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FruitService {
  FruitArray: Fruit[];
  getFruits(id?: any): Observable<Fruit[]> {
    return of(FRUITS);
  }
  getFruit(id: number): Fruit {
   
    this.FruitArray=FRUITS;
    for(var i=0; i<this.FruitArray.length; i++) {
     if(this.FruitArray[i].id===id) {return this.FruitArray[i];}
     else{alert("This fruit is not in the system yet")}
    }
    
  }
 
 
  constructor() { }

}
