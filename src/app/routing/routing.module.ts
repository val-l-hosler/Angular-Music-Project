import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {ResultListComponent} from '../result-list/result-list.component';
import {SearchComponent} from '../search/search.component';

import {ResultsGuard} from './results.guard';

const routes: Routes = [
  {path: 'results', component: ResultListComponent, canActivate: [ResultsGuard]},
  {path: '', component: SearchComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
