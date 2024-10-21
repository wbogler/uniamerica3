import { Component, inject, Inject } from '@angular/core';
import{ FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login!:string
  senha!:string

  router = inject(Router)

  logar(){

    if(this.login=="admin" && this.senha=="admin"){
      this.router.navigate(['admin/pessoas'])
    }else{
      alert("usuario incorreto")
    }
  }

}
