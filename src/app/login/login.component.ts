import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin:boolean=false;
  uname:string='';
  constructor(private myHS:HttpService) { }

  ngOnInit() {
    this.myHS.sendRequest('http://127.0.0.1/xxx-project/data/users/session_data.php').subscribe((result:any)=>{
      //如果result.uname中有数据，说明已登录，把用户名读取到头部，如果没有说明未登录
      if(result.uname){
        this.isLogin=true;
        this.uname=result.uname;
      }
  })
  }
}
