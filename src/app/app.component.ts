
import { Fruit } from './fruit';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   selectedFruit: Fruit;
 
}
