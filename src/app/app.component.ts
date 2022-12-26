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

  constructor(public dialog: MatDialog){}

  openLoginDialog(){
    this.dialog.open(LoginComponent, {
      width: '400px',
      maxWidth: '600px',
      minWidth: '200px'
    });
  }
}
