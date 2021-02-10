import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from './../../interfaces/pelicula'
import { Genero } from './../../interfaces/genero'
import { PeliculaService } from './../../Servicios/pelicula.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  //@Input() //input, dato que entra al componente, desde el padre al hijo//AL MANEJARLO CON RUTAS YA NO FUNCIONA MAS EL PARENTESCO HIJO PADRE
  id_pelicula: number; //d- este componente recibe del componente listado (desde su html) el id de la pelicula
  pelicula:Pelicula;
  generos:Genero[];
  titulo:string = '';

  @Output() //output, dato que sale, desde el hijo al padre
  cancelar = new EventEmitter() //le voy a pasar un evento al componente padre, evento el cual contiene un "false"

  @Output()
  guardar = new EventEmitter()

  constructor(private svcPelicula: PeliculaService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.id_pelicula = params['id'] )
    //CCON ESTO AGARRO EL ID DE LA PELICULA 
  }

  ngOnInit(): void {
    if(typeof this.id_pelicula !== 'undefined'){ //si no es undefined, osea si le paso un ID
      this.titulo = 'Modificar parametros de la Foto';
      this.getPelicula(); //e-apenas inicie este componente, que se ejecute esta funcion
    } else { //si no le paso ningun ID, entonces es para crear nueva pelicula
      this.titulo = 'Alta de Película'
      this.pelicula = {id_pelicula: 0,titulo: '',director:'',id_genero:0,genero:'',foto:''}
    }
    this.obtenerGeneros(); //este lo pongo aparte en el html ya que este se va a visualizar pero no lo voy a editar.
  }

  
  getPelicula(){
    this.svcPelicula.getPeliculaPorId(this.id_pelicula) //f- funcion que posee una funcion que la busca desde el service
    .subscribe(data => this.pelicula = data);
  }
  
  obtenerGeneros(){
    this.svcPelicula.getGeneros() //este al no pasarle ningun parametro, me va a devolver todos los generos, los cuales van a ir a generos
    .subscribe(data => this.generos = data)
  }

  cancelarEdicion(){ 
    //this.cancelar.emit(false) //esta funcion es un EventEmitter, emite algo, aca simplemente digo que me devuelva un "false", tmb se le puede madnar un null
    this.router.navigate(['/home'])//para cancelar directamente me voy a home

  }

  guardarCambios(){
    this.svcPelicula.actualizarPelicula(this.pelicula) //le paso el this.pelicula ya que con el ngModel del HTML el cambio se va a reflejar en todos lados.
    .subscribe(data =>{
      if(data.affectedRows === 1) //affectedRows es el mensaje que devuelve con la cantidad de lineas que fueron afectadas en la consulta.
      console.log("bien ahi!")
      //this.guardar.emit(true)  //OPCION B: El profesor creo otro emiter
      this.router.navigate(['/home'])
    })
    console.log(this.pelicula)
    //OPCION A: (simple) "this.cancelar.emit(false)" y vuelve a la pantalla anterior luego de la edicion
    
  }
}
