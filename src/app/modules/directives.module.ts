import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BottomMarginDirective} from '../directives/bottom-margin.directive';

@NgModule({
  declarations: [BottomMarginDirective],
  imports: [
    CommonModule
  ],
  exports: [
    BottomMarginDirective
  ]
})
export class DirectivesModule {
}
