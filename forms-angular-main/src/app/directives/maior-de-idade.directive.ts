import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorDeIdade]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorDeIdadeDirective,
    multi: true,
  }]
})
export class MaiorDeIdadeDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const idadeParaMaiores = 18
    const anoAtual = new Date().getFullYear();
    const maiorDeIdade = anoAtual-anoNascimento >= idadeParaMaiores

    return maiorDeIdade ? null : { maiorDeIdade: true}
  }

}
