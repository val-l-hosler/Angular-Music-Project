import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {SearchComponent} from '../search/search.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {DirectivesModule} from './directives.module';

const routes: Routes = [
  {path: '', component: SearchComponent}
];

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DirectivesModule
  ],
  exports: [
    RouterModule
  ]
})
export class SearchModule {
}
