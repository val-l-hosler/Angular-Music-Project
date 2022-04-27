import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  noSearchTerm = true;
  searchTermSub?: Subscription;

  constructor(private getItunesApiService: GetITunesApiService) {
  }

  ngOnInit() {
    this.searchTermSub = this.getItunesApiService.searchTerm.subscribe(term => {
      this.noSearchTerm = (term === '');
    });
  }

  ngOnDestroy() {
    this.searchTermSub?.unsubscribe();
  }
}
