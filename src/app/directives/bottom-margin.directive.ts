import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBottomMargin]'
})
export class BottomMarginDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.marginBottom = '2em';
  }

}
