import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchListenerSource = new Subject<string>();


  searchListener = this.searchListenerSource.asObservable();

  constructor() { }


  searchConfirm(filter: string){
    this.searchListenerSource.next(filter);
  }
}
