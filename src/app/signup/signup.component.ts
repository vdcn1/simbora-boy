import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';

import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  confirmPassword = new FormControl('');

  constructor(public router: Router,
              public auth: Auth,
              public authService: AuthenticationService) { }

  ngOnInit(): void {
    if(this.auth !== null){
      console.log("logado com", this.auth)
    }
  }

  onSignUp() {
    const email = this.email.value
    const password = this.password.value

    this.authService.signUp(email, password).then(() => {
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.log(error.code)
    })
  }
}
