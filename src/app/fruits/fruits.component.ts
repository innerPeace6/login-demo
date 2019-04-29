import { FruitService } from './../fruit.service';
import { Fruit } from '../fruit';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})

export class FruitsComponent implements OnInit {
  fruits: Fruit[];
  selectedFruit: Fruit;
  isLogin=localStorage.getItem('isLogin');
  

  constructor(
    private fruitService: FruitService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.getFruits();
    this.activatedRoute.params.subscribe(params => {console.log(params.id+'activatedRoute')});
  }
  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit;
    this.router.navigateByUrl('/detail/{{fruit.id}}');
  }
  getFruits() {
    this.fruitService.getFruits().subscribe(fruits => this.fruits = fruits);
  }

}
