import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id:any;
  id1:any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log("param",params);
      this.id=params;
    } );
   }
  company:any;
  UserName:any;

  ngOnInit(): void {
    this.UserName = localStorage.getItem('username');
    console.log(this.UserName);
    this.company = localStorage.getItem('companyName');
    console.log(this.company);
    this.id1 = localStorage.getItem('id');
    console.log(this.id1);
}
}