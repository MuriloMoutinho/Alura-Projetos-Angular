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
  page: number = 1;
  hasMoreItems: boolean = true;
  textFilter: string = '';

  constructor(private thoughtService: ThoughtService) {}

  ngOnInit(): void {
    this.getThoughtsList();
  }

  searchThoughts() {
    this.page = 1;
    this.hasMoreItems = true;
    this.getThoughtsList();
  }

  getThoughtsList() {
    this.thoughtService.listAll(this.page, this.textFilter)
      .subscribe((thoughtsList) => (this.thoughtsList = thoughtsList));
  }

  loadMoreThoughts() {
    this.page++;
    this.thoughtService
      .listAll(this.page, this.textFilter)
      .subscribe((thoughtsList) => {
        this.thoughtsList.push(...thoughtsList);
        if (!thoughtsList.length) {
          this.hasMoreItems = false;
        }
      });
  }
}
