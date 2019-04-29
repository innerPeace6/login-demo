import { FruitsComponent } from './fruits/fruits.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: FruitsComponent },
  // { path: '/detail/:id', component: FruitDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'prefix' }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
