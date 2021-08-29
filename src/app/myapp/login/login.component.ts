import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }
  emailId:any;
  company:any;
  ngOnInit(): void {
  }
  login(data:any){
    var emailId =data['email'];
 var flag=false;
   this.loginService.getUsers().subscribe((result)=>{
     console.log("result",result);
      
     var users = result;
   for(let i=0;i<users.length;i++){
     if(emailId==users[i].email){
      localStorage.setItem('username', users[i].name);
       localStorage.setItem('companyName',users[i].company['name']);
      // var id = users[i].id;
      localStorage.setItem('id',users[i].id);
      console.log("Login Succesfully",i);
       flag=true;
       console.log("Login Succesfully",users[i].id);
      // this.router.navigate(['dash']);
     }
     
   }
   if(flag){
    this.router.navigate(['/dash/'+localStorage.getItem('id')]);
   }else{
    this.router.navigate(['/login']);
    window.location.reload();
    alert("Please Enter Correct Email")
   }
   })
  }
}
