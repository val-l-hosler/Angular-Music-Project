import {Component, OnInit} from '@angular/core';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

import {ArtistResults} from '../interfaces/artist-results.interface';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  results?: ArtistResults | undefined;

  resultUIInfo?: {
    artistName: string,
    artworkUrl: string,
    collectionName: string
  }[];

  constructor(private getItunesApiService: GetITunesApiService) {
  }

  ngOnInit(): void {
    this.results = this.getItunesApiService.getResults().getValue();

    if (this.results) {
      const {results} = this.results;

      this.resultUIInfo = results.map(result => {
        const {artistName, artworkUrl60, collectionName} = result;
        return {artistName: artistName, artworkUrl: artworkUrl60, collectionName: collectionName};
      });
    }
  }

}
