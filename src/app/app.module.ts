import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { AuthModule, provideAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from "./services/auth/authentication.service"

import { getAuth } from 'firebase/auth';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
