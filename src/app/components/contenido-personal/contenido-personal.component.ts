import { Component, OnInit } from '@angular/core';
import {user} from 'src/app/interfaces/user';

@Component({
  selector: 'app-contenido-personal',
  templateUrl: './contenido-personal.component.html',
  styleUrls: ['./contenido-personal.component.css']
})
export class ContenidoPersonalComponent implements OnInit {
  listAsesores: user[]=[
    {
      id:1,
      nombre:"Alberto",
    apellidopaterno:"Perez",
    telefono:"72212322",
    estado:"disponible",
    codigopostal:"50230",
    correo:"alberto@gmail.com"
    },
    {
      id:2,
      nombre:"Armando",
    apellidopaterno:"Juarez",
    telefono:"72212322",
    estado:"disponible",
    codigopostal:"50200",
    correo:"arbol123@gmail.com"
    },
  ]
  constructor(){}
  ngOnInit(): void{

  }
}
