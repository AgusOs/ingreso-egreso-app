import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public auth: Auth ) { }

  crearUsuario( nombre: string, email:string , password: string ){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}

