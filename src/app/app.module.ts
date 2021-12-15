import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from "./services/auth/authentication.service";
import { PostsComponent } from './home/posts/posts.component'
import { LoginGuard } from './guards/login.guard';
import { FeedGuard } from './guards/feed.guard';
import { FeedServiceService } from './services/feed/feed-service.service';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    FeedServiceService,
    LoginGuard,
    FeedGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
