import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../../services/thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IThought } from '../../../models/thought.model';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrl: './delete-thought.component.scss',
})
export class DeleteThoughtComponent implements OnInit {

  thought?: IThought;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idThought = this.activatedRoute.snapshot.paramMap.get('id');
    this.thoughtService.getById(Number(idThought)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  deleteThought() {
    if (this.thought?.id) {
      this.thoughtService.deleteThought(this.thought.id).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
  }
}

  cancel() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
