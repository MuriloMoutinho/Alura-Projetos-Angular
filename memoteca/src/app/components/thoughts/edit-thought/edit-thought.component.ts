import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../../services/thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IThought } from '../../../models/thought.model';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.scss',
})
export class EditThoughtComponent implements OnInit {

  thought: IThought = {
    id: 0,
    content: "",
    authorShip: "",
    type: "modelo1",
    isFavorite: false
  }
  constructor(
    private thoughtService: ThoughtService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const thoughtId = this.activatedRoute.snapshot.paramMap.get('id');


    this.thoughtService
      .getById(Number(thoughtId))
      .subscribe((thought) => (this.thought = thought));
  }

  editThought() {
    if (this.thought) {
      this.thoughtService.editThought(this.thought).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
