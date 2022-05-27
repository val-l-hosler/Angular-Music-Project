import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent {
  @Input() artistName = '';
  @Input() artworkUrl = '';
  @Input() collectionName = '';
  @Input() url = '';
  @Input() index = 0;
}
