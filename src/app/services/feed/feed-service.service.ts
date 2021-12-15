import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedServiceService {

  constructor(public httpClient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpClient.get(environment.contentUrl + "/posts");
  }
}
