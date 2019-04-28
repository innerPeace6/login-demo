import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsComponent } from './fruits/fruits.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
const routes: Routes = [

  { path: 'detail/:id', component: FruitDetailComponent },
  { path: '', redirectTo: '/detail/:11' },
]

export class AppRoutingModule { }
