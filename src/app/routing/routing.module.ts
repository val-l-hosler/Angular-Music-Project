import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {ResultListComponent} from '../result-list/result-list.component';
import {ArtistSearchComponent} from '../artist-search/artist-search.component';

const routes: Routes = [
  {path: 'results', component: ResultListComponent},
  {path: '', component: ArtistSearchComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
