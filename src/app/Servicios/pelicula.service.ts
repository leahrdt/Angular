import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs'; //libreria que usa angular para hacer llamadas asincronicas (promesas, fetch)
import { Pelicula } from './../interfaces/pelicula'
import { Genero } from './../interfaces/genero'
import { PELICULAS } from './../mock-peliculas'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http' //PARA QUE FUNCIONE EL BACKEND
//HttpClient para traer info, HttpHeaders para MANDAR info, q envia en los headers, HttpErrorResponse para errores
import { catchError } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' //aca configuro la cabecera de la petision, y decirle "te mando un json"
  })
}

@Injectable({
  providedIn: 'root' //1- con el providedIn Root determinamos que podemos llamar a este Injectable desde cualquier lugar del proyecto.
})
export class PeliculaService {

  constructor(private http: HttpClient) { }

  getPeliculas():Observable<Pelicula[]>{//2-metodo getPeliculas, que devuelve un observable del tipo array de Pelicula, explicado clase 3 2:01 Hs
    // return new Observable ((observer: Observer<Pelicula[]>) => { //2.5- voy a devolver un Observable(es decir un objeto asincronico)- 2.6- el cual recibe un callback como parametro (como las promesas), en este parametro especifico que tipo de dato voy a devolver, en este caso especifico que voy a devolver objeto (observer (puede tener cualquier nombre)) que es un array de objetos del tipo Pelicula (<Pelicula[]>).
    //   observer.next(PELICULAS); //3- el metodo .next es para darle un valor a mi objeto observer, el valor que le voy a dar a mi objeto va ser PELICULAS.
    //   observer.complete(); //4- una vez que termine todo, pongo complete.
    // })
    const respuesta = this.http.get<Pelicula[]>("https://5fb136ef59018900164465ea.mockapi.io/items/") //2-3-4 juntos: peticion por get desde el http Client al back
    return respuesta 
  }  


  getPeliculaPorId(id_pelicula:number):Observable<Pelicula>{ //esta funcion se usa en detalle-pelicula
    return this.http.get<Pelicula>("https://5fb136ef59018900164465ea.mockapi.io/items/" + id_pelicula)
  }

  getGeneros():Observable<Genero[]>{
  return this.http.get<Genero[]>("https://601f1a2bb5a0e9001706a2cf.mockapi.io/lala/");
  }

   actualizarPelicula(pelicula:Pelicula):Observable<any>{  //el objeto es tipo any ya que estoy actualizando/editando un objeto, nose que me va a devolver y no me importa
     return this.http.put<any>(`https://5fb136ef59018900164465ea.mockapi.io/items/${pelicula.id_pelicula}`,pelicula,httpOptions).pipe(catchError(this.manejarError)) //put, modificar- 1er parametro:le paso la url, 2do parametro:q el objeto a modificar es unn objeto tipo pelicula, 3er parametro:le mando la configuracion de la cabezera de la peticion (que es un json por put). despuesd del .pipe es todo para manejar el error si algo malo paso al enviar el cv.
  }

  // getGeneros():Observable<Genero[]>{
  //   return this.http.get<Genero[]>("http://localhost:3001/angular5/generos/");
  // }

  // actualizarPelicula(pelicula:Pelicula):Observable<any>{  //el objeto es tipo any ya que estoy actualizando/editando un objeto, nose que me va a devolver y no me importa
  //   return this.http.put<any>(`http://localhost:3001/angular5/peliculas/${pelicula.id_pelicula}`,pelicula,httpOptions).pipe(catchError(this.manejarError)) //put, modificar- 1er parametro:le paso la url, 2do parametro:q el objeto a modificar es unn objeto tipo pelicula, 3er parametro:le mando la configuracion de la cabezera de la peticion (que es un json por put). despuesd del .pipe es todo para manejar el error si algo malo paso al enviar el cv.
  // }


  private manejarError(error: HttpErrorResponse){ //solo para manejar y ver si hay algun error en el envio de datos.
    console.log(`El backend retorno el codigo ${error.status}, el cuerpo del mensaje es ${error.message}`);
    return throwError("algo salio mal");
  }
}

//ESTE SERVICE LO PUEDO USAR EN TODOS LOS COMPONENTES.
