import { FruitService } from './../fruit.service';
import { Fruit } from './../fruit';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getNumberOfCurrencyDigits } from '@angular/common';


@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css'],
})

export class FruitDetailComponent implements OnInit {

  @Input() fruit: any;
  constructor(
    // private route: ActivatedRoute,
    // private fruitService: FruitService
    
  ) { console.log(this.fruit, '===FruitDetailComponent===')}

  ngOnInit(): void {
    // this.getFruit();
  }
  // getFruit(): void {
  //   const id = +this.route.snapshot.paramMap.get('id')
  //   this.fruitService.getFruits(id).subscribe((fruit: any) => this.fruit = fruit);
  // }
}