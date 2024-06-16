import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-load-more',
  templateUrl: './button-load-more.component.html',
  styleUrl: './button-load-more.component.scss'
})
export class ButtonLoadMoreComponent {

  @Input()
  hasMoreItems: boolean = false;
}
