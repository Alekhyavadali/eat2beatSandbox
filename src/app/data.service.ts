import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
  title2:String = "";
  registeredUsers=[];
  userName:String='';
  password:String='';
   postDetails ={
     
    uname:this.userName,
    pswd:this.password
    
 }
 
  constructor(private _http:HttpClient) {
  
  }

 private dataurl='http://localhost:3000/loginDetails'
 private seturl='http://localhost:3000/addDetails'
  getdata():Observable<any>{
   return this._http.get<any>(this.dataurl)
   .do(data => console.log('All: ' + JSON.stringify(data)) );
  }
  givedata():Observable<any>{debugger;
    this.postDetails.uname = this.userName;
    this.postDetails.pswd = this.password;
    return this._http.post<any>(this.seturl,this.postDetails)
    .do(data => console.log('All: ' + JSON.stringify(data)) );
   }

   
}
