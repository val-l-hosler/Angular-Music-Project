import {Component} from '@angular/core';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  resultsActive = true;

  constructor(private getItunesApiService: GetITunesApiService) {
    const term = this.getItunesApiService.searchTerm.getValue();

    (term !== '') ? this.resultsActive = false : null;
  }
}
