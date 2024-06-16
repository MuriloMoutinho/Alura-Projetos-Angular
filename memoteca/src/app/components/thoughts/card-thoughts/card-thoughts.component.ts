import { Component, Input } from '@angular/core';
import { IThought } from '../../../models/thought.model';

@Component({
  selector: 'app-card-thoughts',
  templateUrl: './card-thoughts.component.html',
  styleUrl: './card-thoughts.component.scss',
})
export class CardThoughtsComponent {

  @Input({required: true})
  thought: IThought = {
    id: 0,
    content: 'texto padrão',
    authorShip: 'perdão',
    type: "modelo1"
  };


  thoughtWidth(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
