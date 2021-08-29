import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment } from '../environments/environment'
const api= environment.api
const api1= environment.api1
const api2= environment.api2
const api3= environment.api3
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(api);
  }

  getPosts():Observable<any>{
    return this.http.get(api1);
  }

  getAlbums():Observable<any>{
    return this.http.get(api2);
  }

  getToDocs():Observable<any>{
    return this.http.get(api3);
  }

}
