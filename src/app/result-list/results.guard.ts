import {Injectable} from '@angular/core';

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

import {Observable} from 'rxjs';

import {GetITunesApiService} from '../services/get-iTunes-api.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsGuard implements CanActivate {
  constructor(private getItunesApiService: GetITunesApiService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return (this.getItunesApiService.searchTerm.getValue() !== '') ? true : this.router.parseUrl('');
  }

}
