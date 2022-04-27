import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ResultListComponent} from '../result-list/result-list.component';
import {ResultComponent} from '../result-list/result/result.component';
import {LoadingSpinnerComponent} from '../loading-spinner/loading-spinner.component';
import {ResultsGuard} from '../result-list/results.guard';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {DirectivesModule} from './directives.module';

const routes: Routes = [
  {path: '', component: ResultListComponent, canActivate: [ResultsGuard]}
];

@NgModule({
  declarations: [
    ResultComponent,
    LoadingSpinnerComponent,
    ResultListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    DirectivesModule
  ],
  exports: [
    RouterModule
  ]
})
export class ResultsModule {
}
