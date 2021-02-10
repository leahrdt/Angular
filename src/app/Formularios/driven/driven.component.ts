import { Component, OnInit } from '@angular/core';
import { EstudianteForm } from './../../interfaces/estudiantes-form';
import { EstudianteEntity } from './../../entidades/estudiante-entity'

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent implements OnInit {

  titulo= "Formularios Template Driven"
  estudiante: EstudianteEntity; //solamente especifico que tipo de dato es con EstudianteForm
  constructor() {
    //this.estudiante = { nombre:'carla', appellido: 'perez'}
    this.estudiante = new EstudianteEntity('carla', 'perez');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn("formulario")
  }
}
