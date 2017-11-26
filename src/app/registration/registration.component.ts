import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {DataService} from "../data.service";

import 'rxjs/add/operator/do';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {
 
 loginCredentials = {
  username:"",
  password:""
 };
 data={};
  constructor(private router:Router,private dataService:DataService) { }
 
  ngOnInit() {
    
     
 
  }
 
  
  
  submit(){}
  

  submit1(){ 
    
debugger;
    this.dataService.givedata()
    .subscribe(products => {
      debugger;
  });
    
     this.router.navigateByUrl("mainPage");
    }
    
    login(){
      
      
      if((this.loginCredentials.username===this.dataService.registeredUsers[0].user)&&(this.loginCredentials.password===this.dataService.registeredUsers[0].pass)){
       this.dataService.title2=this.loginCredentials.username;
       this.router.navigateByUrl("mainPage");
      }
      else{
        alert("IS THAT U???");
      }
      
    }
  
}

   
