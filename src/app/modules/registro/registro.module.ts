import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegistroComponent } from './registro-usuario/registro.component';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    SharedModule
  ]
})
export class RegistroModule { }
