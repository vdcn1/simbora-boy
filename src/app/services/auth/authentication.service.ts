import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public router: Router, public http: HttpClient) {
  }

  signUp(emailBody: string, passwordBody: string) {
    return this.http.post(environment.authUrl + '/api/register', {
      email: emailBody,
      password: passwordBody,
    })
  }

  logIn(emailBody: string, passwordBody: string) {
    return this.http.post(environment.authUrl + '/api/login', {
      email: emailBody,
      password: passwordBody,
    })
  }
}
