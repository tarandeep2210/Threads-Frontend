import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from './user.model';

import  * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  updatedata = new Subject();

  login(email:string, password:string) {
    return this.http.post<{access_token:  string}>('http://localhost:3000/users/login', {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
    }));
  }

  register(email:string, password:string) {
    return this.http.post<{access_token: string}>('http://localhost:3000/users/register', {email, password}).pipe(tap(res => {
    this.login(email, password);
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }

            
}