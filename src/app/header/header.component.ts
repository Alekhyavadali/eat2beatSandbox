import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {RegistrationComponent  } from "../registration/registration.component";
import {DataService} from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit() {
  }
  login(){

    this.router.navigateByUrl("registration");
  }
account(){
  this.router.navigateByUrl("account");
}
}

