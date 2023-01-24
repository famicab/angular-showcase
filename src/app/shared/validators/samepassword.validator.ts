import { AbstractControl, FormControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class ClaveStateMatcher implements ErrorStateMatcher {
  private errorCode: string;
  constructor(errorCode: string){
    this.errorCode = errorCode;
  }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && (control.invalid || form?.hasError(this.errorCode)) && (control.dirty || control.touched || isSubmitted));
  }
}

export const passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('clave');
  const confirmPassword = control.get('repetirClave');

  return password?.value === confirmPassword?.value ? null : { claveNoCoincide: true };
};
