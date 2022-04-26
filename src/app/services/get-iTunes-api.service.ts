import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {BehaviorSubject, Observable, Subject} from 'rxjs';

import {ArtistResults} from '../interfaces/artist-results.interface';

@Injectable({
  providedIn: 'root'
})
export class GetITunesApiService {
  results = new Subject<ArtistResults>();
  searchTerm = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }

  getItunesApi(artist: string): Observable<ArtistResults> {
    this.searchTerm.next(artist);

    const finalName = artist
      .trim()
      .replace(' ', '+')
      .toLowerCase();

    const artistUrl = `https://itunes.apple.com/search?term=${finalName}`;

    return this.http.get<ArtistResults>(artistUrl);
  }

  getResults() {
    return this.results;
  }

  setResults(results: ArtistResults) {
    this.results.next(results);
  }
}
