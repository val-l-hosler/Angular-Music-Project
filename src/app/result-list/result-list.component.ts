import {Component, OnInit} from '@angular/core';

import {map, Observable} from 'rxjs';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  searchTerm = '';

  loading = true;

  resultsUIInfo?: Observable<{
    artistName: string,
    artworkUrl: string,
    collectionName: string
  }[] | null>;

  constructor(private getItunesApiService: GetITunesApiService) {
  }

  ngOnInit() {
    this.resultsUIInfo = this.getItunesApiService.results.pipe(map(searchResults => {
        if ('results' in searchResults) {
          this.loading = false;

          const {results} = searchResults;

          return results.map(result => {
            const {artistName, artworkUrl100, collectionName} = result;
            return {artistName: artistName, artworkUrl: artworkUrl100, collectionName: collectionName};
          });
        }

        return null;
      }
    ));

    this.searchTerm = this.getItunesApiService.searchTerm.getValue();
  }
}
