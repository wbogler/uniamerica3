import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Pessoa } from '../../../models/pessoa';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasServiceService } from '../../../service/pessoas-service.service';
import { PessoaRequest } from '../../../models/pessoa-request';
import { LoginService } from '../../../service/login-service.service';
import { Usuario } from '../../../models/usuario';


@Component({
  selector: 'app-pessoasdetails',
  standalone: true,
  imports: [MdbFormsModule,FormsModule],
  templateUrl: './pessoasdetails.component.html',
  styleUrl: './pessoasdetails.component.scss'
})
export class PessoasdetailsComponent {

  @Input('pessoa') pessoa:Pessoa = new Pessoa();

  @Output('retorno') retorno = new EventEmitter<any>();

  acao:string = "salvar"

  pessoaService = inject(PessoasServiceService)

  router = inject(ActivatedRoute)

  isNew:boolean = true;

  routerGenereic = inject(Router)


  constructor(){

    let id = this.router.snapshot.params['id']
    if(id>0){
      this.acao = "atualizar"
      this.isNew=false
      this.findById(id)
    }
  }

  findById(id:number){
    this.pessoaService.findById(id).subscribe({
      next:usuario=>{
        this.pessoa.id = usuario.id;
        this.pessoa.nome = usuario.nome;
        this.pessoa.idade = usuario.id;
        this.pessoa.doc = usuario.doc;
      },
      error:erro=>{
        console.log("problema ao buscar por id")
      }
    })
  }

  salvar(){

    let roles:number[] = [1]
    let pessoaRequest:PessoaRequest = new PessoaRequest(
      0,this.pessoa.nome, this.pessoa.idade, this.pessoa.doc, roles,"admin"
    )
    if(!this.isNew){
      pessoaRequest.id= this.pessoa.id
      console.log(this.pessoa.id)
      console.log(this.pessoa.doc)
      this.pessoaService.atualizarPessoa(pessoaRequest).subscribe(
        {
          next: value =>
          {
            this.routerGenereic.navigate(['admin/pessoas'])
          },
          error: erro =>
          {
            console.log("problema")
          }
        }
      )

    }else{
      this.pessoaService.savePessoa(pessoaRequest).subscribe(
        {
          next: value =>
          {
            this.routerGenereic.navigate(['admin/pessoas'])
          },
          error: erro =>
          {
            console.log("problema")
          }
        }
      )

    }

  }


}
