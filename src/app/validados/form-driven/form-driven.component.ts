import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.css']
})
export class FormDrivenComponent implements OnInit {
  pelicula:Pelicula;
  constructor() { }
  
  ngOnInit(): void {
    this.pelicula = {id_pelicula:1 ,titulo:'',director:'',genero:'', id_genero:1, foto:''}
  }

  enviarFormulario(){
    console.warn("Se va a enviar el siguiente objeto: " + JSON.stringify(this.pelicula))
  }
}