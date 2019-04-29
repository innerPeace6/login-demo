import { FruitService } from './../fruit.service';
import { Fruit } from './../fruit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.css']
})
export class QuickStartComponent implements OnInit {
  fruits: Fruit[]=[];
  constructor(private fruitService: FruitService ,private router: Router) { }
  selectedFruit: Fruit;
  ngOnInit() {
    this.getFruits();
  }
  getFruits(){
    this.fruitService.getFruits().subscribe(fruits => this.fruits=fruits.slice(0,6));
  }
  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit;
    this.router.navigateByUrl("/detail/:id");
  }

}
