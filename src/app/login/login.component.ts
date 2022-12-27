import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginData } from '../interfaces/LoginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private sesionIniciada: boolean = false;
  formularioLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(
    
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public loginData: LoginData,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cerrarLoginDialog() {
    this.dialogRef.close();
  }

  iniciarSesion() {
    const email: string = this.formularioLogin.value.email;
    const password: string = this.formularioLogin.value.password;

    if (email === 'admin@gmail.com' && password === '1234') {
      this.snackbar.open('Inicio de sesión correcto', 'Cerrar');
      sessionStorage.setItem('token', '1');
      sessionStorage.setItem('nombre', email);
      this.sesionIniciada = true;
      this.router.navigate(['home']);
      window.location.reload(); // Workaround, remove in the future
    } else {
      this.snackbar.open('Datos incorrectos', 'Cerrar');
    }
  }

}
