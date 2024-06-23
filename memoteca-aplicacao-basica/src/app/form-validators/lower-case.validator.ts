import { AbstractControl } from "@angular/forms";

export function isLowerCase(control: AbstractControl){
  const formField = control.value as string;
  if(formField !== formField?.toLocaleLowerCase()){
    return { islowercase: true };
  }
  return null;
}
