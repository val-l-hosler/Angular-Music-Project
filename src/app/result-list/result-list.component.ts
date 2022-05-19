import {Component, OnInit} from '@angular/core';

import {map, Observable} from 'rxjs';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  searchTerm = '';

  loading = false;

  resultsUIInfo?: Observable<{
    artistName: string,
    artworkUrl: string,
    collectionName: string
  }[] | null>;

  constructor(private getItunesApiService: GetITunesApiService) {
  }

  ngOnInit() {
    this.loading = true;

    this.resultsUIInfo = this.getItunesApiService.results.pipe(map(searchResults => {
        if ('results' in searchResults) {
          const {results} = searchResults;

          this.loading = false;

          return results.map(result => {
            const {artistName, artworkUrl100, collectionName} = result;
            return {artistName: artistName, artworkUrl: artworkUrl100, collectionName: collectionName};
          });
        }

        return null;
      }
    ))

    this.searchTerm = this.getItunesApiService.searchTerm.getValue();
  }
}
