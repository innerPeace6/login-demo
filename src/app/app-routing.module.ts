import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
// import { HttpService } from './http.service';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login',pathMatch:'prefix' },
  { path: 'detail/:id', component: FruitDetailComponent },
  { path: '/detail', redirectTo: '/detail/:11' },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
