import { Component, inject, Inject } from '@angular/core';
import{ FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../../service/login-service.service';
import { Login } from '../../models/login';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginService = inject(LoginService)
  router = inject(Router)

  data:Login = new Login("","");

  login!:string
  senha!:string

  

  logar(){

    this.data.login = this.login;
    this.data.senha = this.senha;

    this.loginService.logar(this.data).subscribe({
      next: token => {
        this.loginService.addToken(token);
        this.router.navigate(['admin/pessoas'])
      },
      error: erro =>{
        console.log("Deu ruim")
      }
    })

}
}
