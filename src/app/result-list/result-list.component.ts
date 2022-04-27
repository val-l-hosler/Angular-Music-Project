import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit, OnDestroy {
  resultUIInfo?: {
    artistName: string,
    artworkUrl: string,
    collectionName: string
  }[];

  searchTerm = '';

  loading = false;

  resultsSub?: Subscription;

  constructor(private getItunesApiService: GetITunesApiService) {
  }

  ngOnInit() {
    this.loading = true;

    this.searchTerm = this.getItunesApiService.searchTerm.getValue();

    this.resultsSub = this.getItunesApiService.results.subscribe(searchResults => {
      const {results} = searchResults;

      this.resultUIInfo = results.map(result => {
        const {artistName, artworkUrl100, collectionName} = result;
        return {artistName: artistName, artworkUrl: artworkUrl100, collectionName: collectionName};
      });

      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.resultsSub?.unsubscribe();
  }
}
