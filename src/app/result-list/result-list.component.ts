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

  error = false;

  resultsUIInfo?:
    Observable<{ artistName: string; artworkUrl: string; collectionName: string; }[]
      | null
      | 'error'>;

  constructor(private getItunesApiService: GetITunesApiService) {
  }

  ngOnInit() {
    this.resultsUIInfo = this.getItunesApiService.results
      .pipe(
        map(searchResults => {
            this.loading = false;

            if (typeof (searchResults) === 'object' && 'results' in searchResults) {
              const {results} = searchResults;

              return results.map(result => {
                const {artistName, artworkUrl100, collectionName} = result;
                return {artistName: artistName, artworkUrl: artworkUrl100, collectionName: collectionName};
              });
            }

            return (searchResults === 'error') ? searchResults : null;
          }
        )
      );

    this.searchTerm = this.getItunesApiService.searchTerm.getValue();
  }
}
