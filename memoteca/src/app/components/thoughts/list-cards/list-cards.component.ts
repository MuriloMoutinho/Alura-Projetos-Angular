import { Component, OnInit } from '@angular/core';
import { IThought } from '../../../models/thought.model';
import { ThoughtService } from '../../../services/thought.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.scss',
})
export class ListCardsComponent implements OnInit {

  thoughtsList: IThought[] = [];

  constructor(private thoughtService: ThoughtService){ }

  ngOnInit(): void {
    this.thoughtService.listAll()
        .subscribe((list) => { this.thoughtsList = list });
  }
}
