import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';

import {take} from 'rxjs';

import {ArtistResults} from '../interfaces/artist-results.interface';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  artistForm = new FormGroup({
    artist: new FormControl('', [Validators.required])
  });

  constructor(private getItunesApiService: GetITunesApiService) {
  }

  ngOnInit(): void {
    this.getItunesApiService.getResults()
      .pipe(take(1))
      .subscribe(results => {
        console.log(results);
        console.log(results.results);
      });
  }

  onSubmit() {
    const artistName = this.artistForm.value.artist;

    this.getItunesApiService.getItunesApi(artistName)
      .subscribe({
        next: (results: ArtistResults) => this.getItunesApiService.setResults(results),
        error: (err: Error) => {
          this.getItunesApiService.errorMsg = err.message;
        }
      });

    this.artistForm.reset();
  }
}
