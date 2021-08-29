import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { MyappRoutingModule } from './myapp-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { AlbumComponent } from './album/album.component';
import { DocsComponent } from './docs/docs.component';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    PostComponent,
    AlbumComponent,
    DocsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MyappRoutingModule
  ]
})
export class MyappModule { }
