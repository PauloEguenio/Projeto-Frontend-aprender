import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface UsuarioDados {
  id: number;
  nome: string;
  email: string;
}

const ELEMENT_DATA: UsuarioDados[] = [
  {id: 1, nome: 'Paulo Eugenio', email: 'paulo@gmail.com'},
  {id: 2, nome: 'Maria Cecília', email: 'maria@gmail.com'},
  {id: 3, nome: 'Caio Alves', email: 'caio@gmail.com'},
  {id: 4, nome: 'Tito Gomes', email: 'tito@gmail.com'}
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'email', 'actions'];
  dataSource = new MatTableDataSource<UsuarioDados>(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

}
