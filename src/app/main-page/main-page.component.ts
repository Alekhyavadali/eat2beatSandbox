import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToRegistration(){
    this.router.navigateByUrl("registration");
  }

}
