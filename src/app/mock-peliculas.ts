import { unary } from '@angular/compiler/src/output/output_ast'
import { Pelicula } from './interfaces/pelicula'

export const PELICULAS: Pelicula[] = [
{id_pelicula:1, titulo: 'el club de la pelea', genero:"drama", id_genero:1, director:'Nicanor Loreti', foto:'assets/img/titanic.jpg'},
{id_pelicula:2, titulo: 'la momia', genero:"terror", id_genero:2, director:'Nicanor Loreti', foto:'assets/img/themummy.jpg'},
{id_pelicula:3, titulo: 'titanic', genero:"noseq",id_genero:3, director:'Nicanor Loreti', foto:'assets/img/titanic.jpg'},


]

// el id_genero es porq el profe se mando una, pero no iria