import { Component, OnInit } from '@angular/core';
import { Pelicula } from './../../interfaces/pelicula'
import { PeliculaService } from './../../Servicios/pelicula.service' //5- (empieza el 1 en pelicula.service.ts) importo PeliculaService
import { Router } from '@angular/router'

@Component({
  selector: 'app-listado-pelicula',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoPeliculaComponent implements OnInit { 
  //tengo tres atributos, titulo q es mi titulo (string), scvPelicula ue es una instancia de PeliculaService y finalmente pelicula que es un array del tipo pelicula

  peliculas:Pelicula[]; //7.2, creo un atributo pelicula del tipo array de pelicula, aun no tiene valor. 
  //9- ya tenemos almacenado aca el resultado del observable.
  idPeliculaSeleccion:number;  //a- idPeliculaSeleccion:number
  titulo:string = "Carrete de Fotos";
  updateOk:boolean = false;
  constructor(private svcPelicula: PeliculaService, private router:Router) { } //6- instancio el servicio en el constructor.

  ngOnInit(): void {
    this.obtenerPeliculas() //10- voy a llamar al metodo obtenerPeliculas Apenas se cargue la app.
  }

  obtenerPeliculas(){ //7- creo una funcion para obtener los datos
    this.svcPelicula.getPeliculas().subscribe(data => this.peliculas = data) //8. "this.svcPelicula.getPeliculas()" hasta aca solamente nos devuelve un observable, a travez del .subscribe puedo acceder a los datos que me devuelve un observable. es como un .then de fetch. 
    //8.5- (en un callback) lo que nos devuelve lo llamamos "data" y a este data lo llevamos a peliculas, el atributo de ListadoPeliculaComponent que habiamos definido previamente.
    
  }


  seleccionarPelicula(id_pelicula:number){
    //this.idPeliculaSeleccion = id_pelicula;
    this.router.navigate([`/detalle/${id_pelicula}`])//cada vez que hago click, me redirecciona
  }

  volverAtras(estado_false){
    this.obtenerPeliculas();
    this.idPeliculaSeleccion = estado_false; //aca cuando se ejecute volverAtras, el cual viene de Cancelar,le pasa a idPeliculaSeleccion el false
  }

  guardadoOK(estado){
    if(estado){
      this.idPeliculaSeleccion = null
      this.updateOk = true;
      this.obtenerPeliculas() //esto lo puse yo para que obtenga nuevamente las pelis porq no me actualizaba cuando apretaba el boton guardar 
      console.log("todo bien")
    }
  }
}
