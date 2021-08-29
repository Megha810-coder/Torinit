import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  todocs:any;
  todocList:any=[];
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    var id=localStorage.getItem('id');
  this.loginService.getToDocs().subscribe((result)=>{
    console.log("todocs:",result);
    this.todocs=result;
    for(var i=0;i<this.todocs.length;i++){
      if(id == this.todocs[i].userId){
        this.todocList.push(this.todocs[i]);
      }
    }
    console.log(this.todocList);
   })
  }
}
