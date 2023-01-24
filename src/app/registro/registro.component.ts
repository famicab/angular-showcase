import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pais } from '../interfaces/Pais';
import { Usuario } from '../interfaces/Usuario';
import { ClaveStateMatcher, passwordMatchingValidator } from '../shared/validators/samepassword.validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  selectedId: number = 0;

  paises: Pais[] = [
    { id: 1, nombre: 'España' },
    { id: 2, nombre: 'Italia' },
    { id: 3, nombre: 'Francia' },
  ];

  formularioRegistro: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    empresa: new FormControl(''),
    pais: new FormControl(''),
    otroPais: new FormControl({ value: '', disabled: true }),
    correoElectronico: new FormControl('', [Validators.required, Validators.email]),
    genero: new FormControl(''),
    usuario: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    repetirClave: new FormControl('', [Validators.required]),
    aceptaAvisoLegal: new FormControl(false, [Validators.requiredTrue]),
    deseaRecibirNoticias: new FormControl({value: false, disabled:true})
  },
  {
    validators: passwordMatchingValidator
  });

  readonly claveStateMatcher = new ClaveStateMatcher('claveNoCoincide');
  
  constructor(private snackBar:MatSnackBar){}
  
  /**
   * Esta función crea un usuario si los campos mínimos del formulario son correctos.
   */
  crearUsuario() {
    if(this.formularioRegistro.valid){
      const usuario: Usuario = this.formularioRegistro.value;
      this.snackBar.open("Usuario creado con éxito", "Cerrar", {duration: 5000});
    } else {
      this.snackBar.open("Algo falló", "Cerrar", {duration: 5000});      
      Object.keys(this.formularioRegistro.controls).forEach(key => {
        const controlErrors: ValidationErrors | null | undefined = this.formularioRegistro.get(key)?.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log("Errores:" + key);
          });
        }
      });
    }
    
    
  }


}
