import { Fruit } from '../fruit';
import { FRUITS } from './../mock-fruits';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})

export class FruitsComponent implements OnInit {
 fruits = FRUITS;
 selectedFruit:Fruit;
 onSelect(fruit:Fruit):void{
 this.selectedFruit= fruit;
 }
  constructor() { }
  
  ngOnInit() {
    
  }

}
