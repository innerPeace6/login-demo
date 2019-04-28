import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';

const routes: Routes = [

  { path: 'list', component: FruitsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login',pathMatch:'prefix' },//写在后边
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
