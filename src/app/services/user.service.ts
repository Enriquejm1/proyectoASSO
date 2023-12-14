import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private myAppurl:String;
private myApiurl:string;

  constructor(private http:HttpClient) { 
    this.myAppurl=environment.endpoint;
    this.myApiurl='api/users'
  }

  signIn(user:usuario):Observable<any>{
    return this.http.post(`${this.myAppurl}${this.myApiurl}`,user);
  }

  login(user:usuario):Observable<string>{
    return this.http.post<string>(`${this.myAppurl}${this.myApiurl}/login`,user);
  }
}
