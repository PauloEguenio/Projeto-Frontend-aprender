import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'usuario', component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
