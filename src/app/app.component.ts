import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
  constructor(public dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
   this.isLogged = sessionStorage.getItem('token') !== null ? true: false;
   const usuarioLogin = sessionStorage.getItem('nombre');
   this.nombreUsuario =  usuarioLogin !== null? usuarioLogin: '';

   this.matIconRegistry.addSvgIcon(
    'espana',
    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/es.svg")
   );

   this.matIconRegistry.addSvgIcon(
    'reino-unido',
    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/gb.svg")
   );
  }

  openLoginDialog(){
    this.dialog.open(LoginComponent, {
      width: '500px',
      maxWidth: '600px',
      minWidth: '200px'
    });
  }

  cerrarSesion(){
    sessionStorage.clear();
    this.isLogged = false;
    window.location.reload(); // Workaround, remove in the future
  }
}
