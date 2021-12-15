import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor(public authService: AuthenticationService,
              public storageService: StorageService,
              public router: Router,
              public ngZone: NgZone) { }

  ngOnInit(): void {}

  onLogin(){
    swal.fire({
      title: 'Communicating with our servers',
      didOpen: () => swal.showLoading()
    })

    this.authService.logIn(this.email.value, this.password.value).subscribe((response: any) => {
      if(response.error === undefined) {
        this.storageService.setItem('token', response.token);
        this.router.navigateByUrl('/feed');
        swal.close();
      }
      else {
        swal.fire('Error', response.error, 'error');
        throw Error(response.error);
      }
    })
  }
}
