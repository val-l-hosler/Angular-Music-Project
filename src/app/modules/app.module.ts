import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from '../app.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {ArtistSearchComponent} from '../artist-search/artist-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

import {ResultListComponent} from '../result-list/result-list.component';
import {ResultComponent} from '../result-list/result/result.component';
import {RoutingModule} from './routing.module';
import {NavComponent} from '../nav/nav.component';
import {BottomMarginDirective} from '../directives/bottom-margin.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArtistSearchComponent,
    ResultListComponent,
    ResultComponent,
    NavComponent,
    BottomMarginDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
