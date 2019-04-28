import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;
  uname: string = '';
  username;
  password;
  constructor(private myHS: HttpService) { }

  ngOnInit() {
    
  }

  login(){
    
    //如果result.uname中有数据，说明已登录，把用户名读取到头部，如果没有说明未登录
    if (this.username == 'admin' && this.password == '123456') {
      this.isLogin = true;
      this.uname = this.username;
    }
  }
}
