import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

import {AppComponent} from '../app.component';
import {NavComponent} from '../nav/nav.component';

import {MatTabsModule} from '@angular/material/tabs';

import {RoutingModule} from './routing.module';
import {ResultsModule} from './results.module';
import {SearchModule} from './search.module';
import {DirectivesModule} from './directives.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    ResultsModule,
    SearchModule,
    MatTabsModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
