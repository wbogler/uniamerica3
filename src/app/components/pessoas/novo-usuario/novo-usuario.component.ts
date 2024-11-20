import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NovoUsuarioService } from '../../../service/novo-usuario.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './novo-usuario.component.html',
  styleUrl: './novo-usuario.component.scss'
})
export class NovoUsuarioComponent {

  nome!:string
  password!:string
  isAdmin:boolean = false

  cadastro = inject(NovoUsuarioService)
  rota = inject(Router)

  registrar(){
    console.log(this.nome)
    this.cadastro.salvarNovoUsuario(this.nome, this.password,this.isAdmin).subscribe({ 
      next:result =>{
        alert("usuario cadastrado");
        this.rota.navigate(['/admin/pessoas'])
      },
      error:erro=>{
        console.log("erro ao salvar o usuario")
      }
  })
  }

}
