import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() {
    console.log(this.rating);
   }

  ngOnInit() {
  }
@Input() rating:number;
starwidth:number;

}
