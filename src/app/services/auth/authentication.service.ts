import { Injectable } from '@angular/core';
import { Auth } from "@angular/fire/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public auth: Auth) {}

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
}
