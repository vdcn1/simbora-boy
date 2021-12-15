import { Component, OnInit } from '@angular/core';
import { FormControl, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {
  searchString: string = '';

  constructor(public storageService: StorageService,
              public router: Router,
              public searchService: SearchService) { }

  ngOnInit(): void {}

  onLogout() {
    this.storageService.deleteItem('token');
    this.router.navigateByUrl('/login');
  }

  onSearch() {
    this.searchService.searchConfirm(this.searchString);
  }
}
