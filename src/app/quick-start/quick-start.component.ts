import { FruitService } from './../fruit.service';
import { Fruit } from './../fruit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.css']
})
export class QuickStartComponent implements OnInit {
  fruits: Fruit[]=[];
  constructor(private fruitService: FruitService ) { }

  ngOnInit() {
    this.getFruits();
  }
  getFruits(){
    this.fruitService.getFruits().subscribe(fruits => this.fruits=fruits.slice(0,6));
  }

}
