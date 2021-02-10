import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { validadorNombre,validadorApellido, validadorEmail,validadorEdad,validadorPais,validadorPass } from './validarNombre'


@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  
  validator:boolean=false
  titulo="Formulario Reactivo";

  constructor(private fn: FormBuilder) { }

  ngOnInit(): void {
    
  }

  formAngular = new FormGroup({ //para averiguar mas sobre Validators, google que en la web de angular estan todos, lo mas facil es usar expRegulares
    'name': new FormControl('', [Validators.required,validadorNombre(/^[A-Za-z]+$/)]), //nombre es el nombre de de formControlName
    'apellido': new FormControl('', [Validators.required,validadorApellido(/^[A-Za-z]+$/)]), 
    'email': new FormControl('', [Validators.required,validadorEmail(/^[A-Za-z]+(\.?\w+)*([\-_]?\w+)@[A-Za-z]+([\-_]?\w+)*(\.[A-Za-z]{2,7})+$/)]),
    'password': new FormControl('', [Validators.required,validadorPass(/^[A-Za-z0-9]\w{8,}$/)]),
    'edad': new FormControl('', [Validators.required,validadorEdad(/^[\d]+$/)]),
    'pais': new FormControl('', [Validators.required,,validadorPais(/^[\d]+$/)]),
    'terminos': new FormControl('', [Validators.required]),
  })

  // formAngular = this.fn.group({
  //   name:['leandro'],
  //   apellidadazo:['fernandez']
  // })

  onSubmit():void{ //evento del submit
    console.log("enviado!")
    if(this.formAngular.valid ){
    this.validator=true}
    
  }

  actualizate(): void{
    this.formAngular.patchValue({
      name: '',
      apellido: '',
      edad:'',
      email:'',
      password:'',
      pais:0,
    })
  }

get name() { return this.formAngular.get('name');}

get apellido() { return this.formAngular.get('apellido');}

get email() { return this.formAngular.get('email');}

get password() { return this.formAngular.get('password');}

get edad() { return this.formAngular.get('edad');}

get pais() { return this.formAngular.get('pais');}

get terminos() { return this.formAngular.get('terminos');}


aceptarAlerta():void{ //evento del submit
  this.validator=false
  
}
}