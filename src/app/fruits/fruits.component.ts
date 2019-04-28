import { FruitService } from './../fruit.service';
import { Fruit } from '../fruit';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
}) d

export class FruitsComponent implements OnInit {
 fruits : Fruit[];
 selectedFruit:Fruit;
 
  constructor( private fruitService: FruitService) {
       
   }

  ngOnInit() {
    this.getFruits();
  }
  onSelect(fruit:Fruit):void{
    this.selectedFruit= fruit;
    }
    getFruits(){
     this.fruitService.getFruits().subscribe(fruits => this.fruits=fruits);
   }
  
}
