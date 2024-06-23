import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Directive({
  selector: '[cepValido]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CepValidoDirective,
    multi: true
  }]
})
export class CepValidoDirective implements AsyncValidator {

  constructor(private consultaCepService: ConsultaCepService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;
    return this.consultaCepService.buscarCep(cep).pipe(map(
      (resultado: any) => resultado.erro ? { 'cepValido': true } : null
    ));

  }
}
