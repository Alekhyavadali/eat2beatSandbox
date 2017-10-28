import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  name="Teja Swaroop";
  val="hai";
  showRegister:boolean = false;

  constructor(){
   

  }

  start(){
    alert("start")
  }

  funcCall(){
    window.location.href = "https://www.google.com"
  }
  manageRegister(){
   this.showRegister=(this.showRegister)?false:true;
    }
  }








