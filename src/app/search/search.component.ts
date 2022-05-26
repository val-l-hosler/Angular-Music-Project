import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {SearchResultsInterface} from '../interfaces/search-results.interface';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    searchTerm: new FormControl('', [Validators.required])
  });

  constructor(private getItunesApiService: GetITunesApiService, private router: Router) {
  }

  ngOnInit() {
    this.getItunesApiService.searchTerm.next('');
  }

  onSubmit() {
    const searchTerm = this.searchForm.value.searchTerm;

    this.getItunesApiService.getItunesApi(searchTerm)
      .subscribe({
        next: (results: SearchResultsInterface) => this.getItunesApiService.setResults(results),
        error: () => this.getItunesApiService.setResults({} as SearchResultsInterface)
      });

    this.searchForm.reset();

    this.router.navigate(['/results']);
  }
}
