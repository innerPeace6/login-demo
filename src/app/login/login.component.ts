//  import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;
  // uname: string = '';
  username;
  password;
  constructor() { }

  ngOnInit() {
    
  }

  login(){
    
    //如果result.uname中有数据，说明已登录，把用户名读取到头部，如果没有说明未登录
    if (this.username == 'admin' && this.password == '123456') {
      this.isLogin = true;
      // this.uname = this.username;
    }else{this.isLogin = false;}
    
  }
}
