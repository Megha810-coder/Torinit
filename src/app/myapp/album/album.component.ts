import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums:any;
  albumList:any=[];
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
     var id=localStorage.getItem('id');
  this.loginService.getAlbums().subscribe((result)=>{
    console.log("albums:",result);
    this.albums=result;
    for(var i=0;i<this.albums.length;i++){
      if(id == this.albums[i].userId){
        this.albumList.push(this.albums[i]);
      }
    }
    console.log(this.albumList);
  })
  }


}
