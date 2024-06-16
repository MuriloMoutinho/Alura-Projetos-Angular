import { Component, OnInit } from '@angular/core';
import { IThought } from '../../../models/thought.model';
import { ThoughtService } from '../../../services/thought.service';
import { Router } from '@angular/router';

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
  getOnlyFavorites: boolean = false;
  title: string = "Meu Mural";

  constructor(private thoughtService: ThoughtService) {}

  ngOnInit(): void {
    this.getThoughtsList();
  }

  getThoughtsList() {
    this.page = 1;
    this.hasMoreItems = true;
    this.thoughtService
      .listAll(this.page, this.textFilter, this.getOnlyFavorites)
      .subscribe((thoughtsList) => (this.thoughtsList = thoughtsList));
  }

  loadMoreThoughts() {
    this.page++;
    this.thoughtService
      .listAll(this.page, this.textFilter, this.getOnlyFavorites)
      .subscribe((thoughtsList) => {
        this.thoughtsList.push(...thoughtsList);
        if (!thoughtsList.length) {
          this.hasMoreItems = false;
        }
      });
  }

  desactiveGetOnlyFavorites() {
    this.title = "Meu Mural"
    this.getOnlyFavorites = false;
    this.getThoughtsList();
  }

  activeGetOnlyFavorites() {
    this.title = "Meus Favoritos"
    this.getOnlyFavorites = true;
    this.getThoughtsList();
  }

}
