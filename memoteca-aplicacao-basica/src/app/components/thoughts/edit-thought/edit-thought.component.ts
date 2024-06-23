import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../../services/thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isLowerCase } from '../../../form-validators/lower-case.validator';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.scss',
})
export class EditThoughtComponent implements OnInit {

  thoughtForm: FormGroup  = this.formBuilder.group({
    id: [0],
    content: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/) ]],
    authorShip: ['', [
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3),
        isLowerCase ]],
    type: ['', Validators.required],
    isFavorite: [false],
  });

  constructor(
    private thoughtService: ThoughtService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const thoughtId = this.activatedRoute.snapshot.paramMap.get('id');

    this.thoughtService.getById(Number(thoughtId)).subscribe((thought) => {
      this.thoughtForm.setValue({
        id: thought.id,
        content: thought.content,
        authorShip: thought.authorShip,
        type: thought.type,
        isFavorite: thought.isFavorite,
      });
    });
  }

  editThought() {
    if (this.thoughtForm.valid) {
      this.thoughtService.editThought(this.thoughtForm.value).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }

  setButtonClass() {
    if (this.thoughtForm.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }

  cancel() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
