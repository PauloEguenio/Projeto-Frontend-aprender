import { MaterialModule } from './../material.module';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class PagesModule { }
