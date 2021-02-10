import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MiComponente } from './mi-componente/mi-componente.component';
import { TestComponent } from './test/test.component';  
import {FormsModule, ReactiveFormsModule} from '@Angular/forms';
import { ReactivoComponent } from './Formularios/reactivo/reactivo.component';
import { DrivenComponent } from './Formularios/driven/driven.component';
import { FormDrivenComponent } from './validados/form-driven/form-driven.component'; //estos son modulos, se importan en import solamente
import { HttpClientModule } from '@angular/common/http';
import { PeliculasModule } from './Peliculas/peliculas.module' //importo el modulo Pelicula en el import y ya esta, puedo usar este componente para otro proyecto.
import { NavbarComponent } from './Peliculas/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    TestComponent,
    ReactivoComponent,
    DrivenComponent,
    FormDrivenComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PeliculasModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent] //la app por la cual va a iniciar
})
export class AppModule { }
  