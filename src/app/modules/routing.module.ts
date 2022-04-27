import {NgModule} from '@angular/core';

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'results', loadChildren: () => import('./results.module').then(m => m.ResultsModule)},
  {path: '', loadChildren: () => import('./search.module').then(m => m.SearchModule)}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
