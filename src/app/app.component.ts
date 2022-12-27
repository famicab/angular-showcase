import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-showcase';
  isLogged: boolean = false;
  nombreUsuario: string = ''
  constructor(public dialog: MatDialog){
   this.isLogged = sessionStorage.getItem('token') !== null ? true: false;
   const usuarioLogin = sessionStorage.getItem('nombre');
   this.nombreUsuario =  usuarioLogin !== null? usuarioLogin: '';
  }

  openLoginDialog(){
    this.dialog.open(LoginComponent, {
      width: '400px',
      maxWidth: '600px',
      minWidth: '200px'
    });
  }

  cerrarSesion(){
    sessionStorage.clear();
    this.isLogged = false;
  }
}
