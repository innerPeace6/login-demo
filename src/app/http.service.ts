// import {Injectable} from '@angular/core';
// // import {ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot} from '@angular/router';
// // import {Observable} from 'rxjs/Observable';
// // import 'rxjs/add/operator/map';
// // import {Store} from '@ngrx/store';
// // import * as fromReducer from '../ngrx/reducers';
// // import {GuardSuccess} from '../ngrx/actions/login-guard.action';
// import { Http,Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// // import {HttpClient} from '@angular/common/http';

// // interface LoginGuard {
// //   data: any;
// //   msg: string;
// //   status: boolean;
// // }


// @Injectable()
// export class HttpService {
//   constructor(private http:Http) {
//   }
//   sendRequest(myUrl:string){
//     //a-http-get快捷键
//     return this.http.get(myUrl,{withCredentials:true})
//     .map((response:Response)=>response.json());
//     //{withCredentials:true}指定证书，允许获取跨域中的session数据，客户端设置true
//     }
 
//   // constructor(private router: Router, private store$: Store<fromReducer.State>, private http: HttpClient) {
//   // } 

//   // canActivate(route: ActivatedRouteSnapshot,
//   //             state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

//   //   return this.activate();
//   // }

//   // activate(): Observable<boolean> {
//   //   const url = 'http://192.168.1.248:3307/judgeUser';
//   //   return this.http.post(url, '').map((guard: LoginGuard) => {
//   //     const guard$ = guard;
//   //     console.log(guard$)
//   //     if (!guard$.status) {
//   //       this.router.navigate(['/']); // 没有用户登录的话就跳到登录页面
//   //     }
//   //     this.store$.dispatch(new GuardSuccess(guard$)); // 更改当前的用户信息
//   //     return guard$.status;
//   //   });
//   // }
// }

