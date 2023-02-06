import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './modules/registro/registro-usuario/registro.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registro', loadChildren: () => import('./modules/registro/registro.module').then(m => m.RegistroModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
