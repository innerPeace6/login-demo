import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;
  username;
  password;
  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    
  }

  login(){

    //如果result.uname中有数据，说明已登录，把用户名读取到头部，如果没有说明未登录
    if (this.username == 'admin' && this.password == '123456') {
      this.isLogin = true;
      //跳转到列表页
      this.router.navigateByUrl("/list");
    }
  }
}
