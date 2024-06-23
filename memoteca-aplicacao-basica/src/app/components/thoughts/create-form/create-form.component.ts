import { Component } from '@angular/core';
import { ThoughtService } from '../../../services/thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isLowerCase } from '../../../form-validators/lower-case.validator';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {

  thoughtForm: FormGroup = this.formBuilder.group({
    content: ["", Validators.compose([ //não é obrigatório utilizar este Validators.compose, é possível apenas passar o array
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/(.|\s)*\S(.|\s)*/),
    ])],
    authorShip: ["", [
      Validators.required,
      Validators.pattern(/(.|\s)*\S(.|\s)*/),
      Validators.minLength(3),
      isLowerCase,
    ]],
    type: ["modelo1", Validators.required],
    isFavorite: [false]
  });

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ){ }

  createThought(){
    if(this.thoughtForm.valid){
      this.thoughtService.createThought(this.thoughtForm.value).subscribe(() => {
        this.router.navigate(['/listar-pensamentos'])
      });
    }
  }

  cancel(){
    this.router.navigate(['/listar-pensamentos'])
  }

  setButtonClass(){
    if(this.thoughtForm.valid){  //esta validação e class é um pouco inútil, visando que poderia ser colocado o pseudo classe  de :disable na classe de 'botao'
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}
