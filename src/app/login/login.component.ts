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

    if (this.username == 'admin' && this.password == '123456') {
      this.isLogin = true;
      this.router.navigateByUrl("/list");
      
      sessionStorage.setItem('isLogin', 'true');
    }else{alert("账号或密码错误，请重新输入")};
  }
 
  
}
