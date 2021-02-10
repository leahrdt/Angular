//creamos app-routing.module haciendo ng g module app-routing, lo ponemos en cualquier otra carpeta y lo traemos aca, a este modulo lo vamos a usar para el ruteo.  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
//import { PeliculasModule } from './Peliculas/peliculas.module';
import { ListadoPeliculaComponent } from './Peliculas/listado/listado.component';
import { DrivenComponent } from './Formularios/driven/driven.component';
import { ReactivoComponent } from './Formularios/reactivo/reactivo.component';
import { DetallePeliculaComponent } from './Peliculas/detalle-pelicula/detalle-pelicula.component';

const routes: Routes = [
  { path: 'home', component: ListadoPeliculaComponent},
  { path: 'driven/formulario',component: DrivenComponent },
  { path: 'reactive', component: ReactivoComponent },
  { path: 'detalle/:id', component: DetallePeliculaComponent },
  { path: 'nueva', component: DetallePeliculaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule] //no olbidarse de exportar
})
export class AppRoutingModule { } //importar esto en app.module.ts
