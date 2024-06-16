import { Component } from '@angular/core';
import { INewThought } from '../../../models/thought.model';
import { ThoughtService } from '../../../services/thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {

  thought: INewThought = {
    id: 0,
    content: "",
    authorShip: "",
    type: "modelo1"
  }

  constructor(
    private thoughtService: ThoughtService,
    private router: Router){ }

  createThought(){
    this.thoughtService.createThought(this.thought).subscribe(() => {
      this.router.navigate(['/listar-pensamentos'])
    });
  }

  cancel(){
    this.router.navigate(['/listar-pensamentos'])
  }
}
