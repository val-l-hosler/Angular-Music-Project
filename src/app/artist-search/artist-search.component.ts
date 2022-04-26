import {Component, ViewEncapsulation} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ArtistResults} from '../interfaces/artist-results.interface';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArtistSearchComponent {
  artistForm = new FormGroup({
    artist: new FormControl('', [Validators.required])
  });

  constructor(private getItunesApiService: GetITunesApiService) {
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
