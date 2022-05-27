import {Component, OnInit} from '@angular/core';

import {map, Observable} from 'rxjs';

import {GetITunesApiService} from '../services/get-iTunes-api.service';
import {Router} from "@angular/router";

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
    Observable<{ artistName: string; artworkUrl: string; collectionName: string; url: string; }[]
      | null
      | 'error'>;

  constructor(private getItunesApiService: GetITunesApiService, private router: Router) {
  }

  ngOnInit() {
    this.searchTerm = this.getItunesApiService.searchTerm.getValue();

    if (this.searchTerm === '') {
      this.router.navigate(['']);
    } // this fixes the Github pages 404 problem

    this.resultsUIInfo = this.getItunesApiService.results
      .pipe(
        map(searchResults => {
            this.loading = false;

            if (typeof (searchResults) === 'object' && 'results' in searchResults) {
              const {results} = searchResults;

              return results.map(result => {
                const {artistName, artworkUrl100, collectionName, trackViewUrl} = result;
                return {
                  artistName: artistName,
                  artworkUrl: artworkUrl100,
                  collectionName: collectionName,
                  url: trackViewUrl
                };
              });
            }

            return (searchResults === 'error') ? searchResults : null;
          }
        )
      );
  }
}
