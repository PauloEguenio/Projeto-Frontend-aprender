

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { IUsuario } from '../models/usuario.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
baseUrl: string = environment.baseurl;
  constructor(
    private httpclient: HttpClient
  ) { }
}
