import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, 
              private AuthService: AuthService,
              private router: Router){}

  ngOnInit(){

    this.registroForm = this.fb.group({
      nombre: [ '', Validators.required ],
      correo: [ '', [Validators.required, Validators.email ]],
      password: [ '', Validators.required ]
    })
  }

  crearUsuario(){

    if( this.registroForm.invalid ){
      return;
    }

    const { nombre, correo, password } = this.registroForm.value;
    this.AuthService.crearUsuario ( nombre, correo, password )
    .then( credenciales => {
      console.log( credenciales );
      this.router.navigate(['/']);
    })
    .catch ( error => console.error ( error ) )

  }

}
