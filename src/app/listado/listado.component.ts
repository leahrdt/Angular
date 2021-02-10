import { Component, OnInit } from '@angular/core';

import { Estudiante } from './../interfaces/estudiante';

const ESTUDIANT:Array<Estudiante> = [
  {nombre: 'Maria Perez',legajo:123,materia:'PHP',regular:true},
  {nombre: 'Roberto Gonzalez',legajo:456,materia:'Angular',regular:true},
  {nombre: 'Andrea Ramirez',legajo:789,materia:'C#',regular:true}
]

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  losEstudiantes:Array<Estudiante> = ESTUDIANT;
  estudianteSeleccionado:Estudiante; //Si le saco :estudiante, tmb anda, pero estaria mal.

  constructor() { } //este se instancia solamente una vez, como un patron singleton

  ngOnInit(): void { //este se instancia varias veces a lo largo de la vida de la app
    console.log("se cargó el componenteEEE")
  }

  verDetalleEstudiante( estudianteQAgarreDelEvento : Estudiante){ //Estudiante que agarre del evento, es del tipo estudiante (Si le saco :estudiante, tmb anda, pero estaria mal.)
    this.estudianteSeleccionado = estudianteQAgarreDelEvento //el estudiante que agarre del evento, y lo pongo en estudianteSeleccionado
  }
}