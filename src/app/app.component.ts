import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

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

  constructor(private router:Router){
   this.router.navigateByUrl("mainPage");
    
  }

  
  
  manageRegister(){
   this.showRegister=(this.showRegister)?false:true;
    }
  }








