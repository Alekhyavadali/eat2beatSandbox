import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  
})
export class AccountComponent implements OnInit {

  constructor(private dataService:DataService) {
    
   }
 
details=[];
  ngOnInit() {
    this.dataService.getdata()
      .subscribe(products => {
        this.details = products;
    });
  }
  
}
