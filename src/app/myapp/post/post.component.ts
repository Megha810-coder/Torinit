import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;
  postList:any=[];
  show=false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    var id=localStorage.getItem('id');
  this.loginService.getPosts().subscribe((result)=>{
    console.log("posts:",result);
    this.posts=result;
    for(var i=0;i<this.posts.length;i++){
      if(id == this.posts[i].userId){
        this.postList.push(this.posts[i]);
      }
    }
    console.log(this.postList);
  })
  }

  checkId:any;
  showDiv(id:any){
    this.checkId=id;
    this.show=true;
  }

  // myfunction(){
  //   var input, filter, table, tr, td, i, txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   table = document.getElementById("myTable");
  //   tr = table.getElementsByTagName("tr");
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[0];
  //     if (td) {
  //       txtValue = td.textContent || td.innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }       
  //   }
  // }
  

}
