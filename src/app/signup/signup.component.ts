import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

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
              public authService: AuthenticationService) {}

  ngOnInit(): void {

  }

  onSignUp() {
    const email = this.email.value
    const password = this.password.value
    const confirmPassowrd = this.confirmPassword.value

    console.log
    if(password === confirmPassowrd){
      swal.fire({
        title: 'Communicating with our servers',
        didOpen: () => swal.showLoading()
      })
      this.authService.signUp(email, password).subscribe((response: any) => {
        if(response.error === undefined) {
          this.router.navigateByUrl('/login');
          swal.close();
          swal.fire({
            title: "Successful registration!",
            icon: 'success',
          })
        }
        else {
          swal.fire('Error', response.error, 'error')
          throw Error(response.error);
        }
      })
    }
    else {
      swal.fire(
        'Error',
        'Passwords does not match!',
        'error'
      )
    }
  }
}
