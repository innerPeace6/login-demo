import { FruitService } from './../fruit.service';
import { Fruit } from '../fruit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})

export class FruitsComponent implements OnInit {
  fruits: Fruit[];
  selectedFruit: Fruit;

  constructor(
    private fruitService: FruitService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getFruits();
  }
  // onSelect(fruit: Fruit): void {
  //   this.selectedFruit = fruit;
  //   this.router.navigateByUrl("/list");
  // }
  getFruits() {
    this.fruitService.getFruits().subscribe(fruits => this.fruits = fruits);
  }

}
