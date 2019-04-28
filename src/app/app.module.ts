// import { HttpModule } from '@angular/http';
// import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    FruitDetailComponent,
    QuickStartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    AppRoutingModule
  ],
  providers: [],
  // providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
