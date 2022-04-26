import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent {
  @Input() artistName = '';
  @Input() artworkUrl = '';
  @Input() collectionName = '';
  @Input() index = 0;
}
