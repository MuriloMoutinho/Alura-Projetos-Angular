import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IThought } from '../../../models/thought.model';
import { ThoughtService } from '../../../services/thought.service';

@Component({
  selector: 'app-card-thoughts',
  templateUrl: './card-thoughts.component.html',
  styleUrl: './card-thoughts.component.scss',
})
export class CardThoughtsComponent {

  @Input({required: true})
  thought!: IThought;

  @Output()
  updateList: EventEmitter<void> = new EventEmitter<void>();

  constructor(private thoughtService: ThoughtService){ }

  thoughtWidth(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  changeFavoriteIcon(){
    if(this.thought.isFavorite){
      return "ativo"
    }
    return "inativo"
  }

  favorite(){
    this.thoughtService.favoriteThought(this.thought).subscribe();
    this.updateList.emit();
  }
}
