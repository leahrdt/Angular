import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//aca creamos un componente Modulo para hacer todo un modulo de todo lo que se trata de peliculas
//import { BrowserModule } from '@angular/platform-browser' //browser es el modulo que tiene todas las instruccines y dependencias relacionadas con las directivas html para modificar el dom
import { ListadoPeliculaComponent} from './listado/listado.component'
import { DetallePeliculaComponent} from './detalle-pelicula/detalle-pelicula.component'
import {FormsModule, ReactiveFormsModule} from '@Angular/forms';
//import { NavbarComponent } from './navbar/navbar.component';
//todos los componentes que cree dentro de la carpeta pelicula, los va a declarar ACA!
//a este componente navbar me lo llevo al app.module general

@NgModule({
  declarations: [
    ListadoPeliculaComponent,
    DetallePeliculaComponent,
    //NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[ //ACORDARSE, agrego el export, y ya tengo el modudo de peliculas, 
    ListadoPeliculaComponent,
    DetallePeliculaComponent,
    //NavbarComponent
  ]
})
export class PeliculasModule { }
