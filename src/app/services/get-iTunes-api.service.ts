import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {BehaviorSubject, Observable, Subject} from 'rxjs';

import {SearchResultsInterface} from '../interfaces/search-results.interface';

@Injectable({
  providedIn: 'root'
})
export class GetITunesApiService {
  results = new Subject<SearchResultsInterface>();
  searchTerm = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }

  getItunesApi(artist: string): Observable<SearchResultsInterface> {
    this.searchTerm.next(artist);

    const finalName = artist
      .trim()
      .replace(' ', '+')
      .toLowerCase();

    const artistUrl = `https://itunes.apple.com/search?term=${finalName}`;

    return this.http.get<SearchResultsInterface>(artistUrl);
  }

  getResults() {
    return this.results;
  }

  setResults(results: SearchResultsInterface) {
    this.results.next(results);
  }
}
