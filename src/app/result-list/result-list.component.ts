import {Component, OnInit} from '@angular/core';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  resultUIInfo?: {
    artistName: string,
    artworkUrl: string,
    collectionName: string
  }[];

  searchTerm = '';

  loading = false;

  constructor(private getItunesApiService: GetITunesApiService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.searchTerm = this.getItunesApiService.searchTerm.getValue();

    this.getItunesApiService.getResults()
      .subscribe(resultsSubject => {
        const {results} = resultsSubject;

        this.resultUIInfo = results.map(result => {
          const {artistName, artworkUrl100, collectionName} = result;
          return {artistName: artistName, artworkUrl: artworkUrl100, collectionName: collectionName};
        });

        this.loading = false;
      });
  }

}
