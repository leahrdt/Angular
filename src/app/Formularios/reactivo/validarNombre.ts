import { AbstractControl, ValidatorFn } from '@angular/forms'

export function validadorNombre(nameExp : RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const lala = nameExp.test(control.value);
        console.log(control.value);
        console.log(lala)
        return !lala ? {'nameName': {value: control.value}}: null;
    }   
}

export function validadorApellido(apellidoExp : RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const apellido = apellidoExp.test(control.value);
        console.log(control.value);
        console.log(apellido)
        return !apellido ? {'apellidoApellido': {value: control.value}}: null;
    }   
}

export function validadorEmail(emailExp : RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const email = emailExp.test(control.value);
        console.log(control.value);
        console.log(email)
        return !email ? {'emailEmail': {value: control.value}}: null;
    }   
}

export function validadorEdad(edadExp : RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const edad = edadExp.test(control.value);
        console.log(control.value);
        console.log(edad)
        return !edad ? {'edadEdad': {value: control.value}}: null;
    }   
}

export function validadorPais(paisExp : RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const pais = paisExp.test(control.value);
        console.log(control.value);
        console.log(pais)
        return !pais ? {'paisPais': {value: control.value}}: null;
    }   
}

export function validadorPass(passExp : RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const password = passExp.test(control.value);
        console.log(control.value);
        console.log(password)
        return !password ? {'passPass': {value: control.value}}: null;
    }   
}