import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pais } from '../interfaces/Pais';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  selectedId: number = 0;

  paises: Pais[] = [
    {id: 1, nombre: 'España'},
    {id: 2, nombre: 'Italia'},
    {id: 3, nombre: 'Francia'},
  ];
  formularioRegistro: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    empresa: new FormControl(''),
    pais: new FormControl(''),
    otroPais: new FormControl({ value:'', disabled:true}),
    correoElectronico: new FormControl('', [Validators.required, Validators.email]),
    genero: new FormControl(''),
    usuario: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required]),
    repetirClave: new FormControl('', [Validators.required])
  });
}
