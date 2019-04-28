import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin:boolean=false;
  uname:string='';
  constructor(private myHS:HttpService,private router:Router) { }

  ngOnInit() {

    this.myHS.sendRequest('/login').subscribe((result:any)=>{
      //如果result.uname中有数据，说明已登录，把用户名读取到头部，如果没有说明未登录
      if(result.uname){
        this.isLogin=true;
        this.uname=result.uname;
      }
    })        


      }
  
      login(){ // 登录跳转页面

        //this.router.navigate(["/page1"],{queryParams:{"id":"10","name":"word","age":"30"}});
    
        this.router.navigateByUrl("/detail");
    
      }
}
