import { Component, Input, OnInit } from '@angular/core';

import { Estudiante } from './../interfaces/estudiante';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  titulo:string = "Modificar Estudiante"

  @Input() //este decorador es para que sepa que "estudianteT:Estudiante" lo vamos a estar recibiendo del componente padre
  estudianteT:Estudiante  
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.estudianteT)
  }

  mostrarEstudiante():void{ //SOLO MUESTRA EN CONSOLA LO QUE ESCRIBO EN NOMBRE.
    console.log(this.estudianteT)
  }

}