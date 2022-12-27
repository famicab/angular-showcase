import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private snackbar: MatSnackBar) {

    }

  canActivate(): boolean {
        if (sessionStorage.getItem('token') !== null) {
            return true;
        } else {
            this.snackbar.open('Debe iniciar sesión antes', 'Cerrar');
            //this.router.navigate(['usuario/login']);
        }
        return sessionStorage.getItem('token') !== null;
    }
  
}
