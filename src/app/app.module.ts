import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    FruitDetailComponent,
    QuickStartComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
