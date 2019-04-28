import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:Http) { }
  sendRequest(myUrl:string){
    return this.http.get(myUrl).toPromise().then(res => {
      
      return res.json();
    })
    // return this.http.get(myUrl,{withCredentials:true})
    // .pipe((response:Response)=>response.json());
  }

}
