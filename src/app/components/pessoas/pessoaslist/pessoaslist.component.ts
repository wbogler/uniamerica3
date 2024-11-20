import { Component, inject, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Pessoa } from '../../../models/pessoa';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PessoasServiceService } from '../../../service/pessoas-service.service';
import { LoginService } from '../../../service/login-service.service';

@Component({
  selector: 'app-pessoaslist',
  standalone: true,
  imports: [ CommonModule, MdbModalModule],
  templateUrl: './pessoaslist.component.html',
  styleUrl: './pessoaslist.component.scss'
})
export class PessoaslistComponent implements OnInit{
  permissionService = inject(LoginService)

  constructor(){

  }

  ngOnInit(): void {
    
  }

  tebleHead:string[] = ["id","nome","idade","documento"]
  pessoas:Pessoa[] = []

  router = inject(Router)

  pessoaEdit:Pessoa = new Pessoa()

  novo(){
    this.router.navigate(['/admin/pessoas/new'])
  }

  edit(pessoa:Pessoa){
    this.router.navigate(['/admin/pessoas/edit/'+pessoa.id])
  }

  deletar(pessoa:Pessoa){
    if(confirm(`Excluir ${pessoa.nome}?`) && pessoa.id>0){
        
      this.pessoaService.deleteById(pessoa.id).subscribe(
        {
          next: value =>
          {
            this.findAll()
          },
          error: erro =>
          {
            console.log("problema")
          }
        }
      )
    }
    
  }

  pessoaService = inject(PessoasServiceService)

  findAll(){
    this.pessoaService.findAll().subscribe(
      {
        next: value =>
        {
          this.pessoas = value
        },
        error: erro =>
        {
          alert("Erro")
        }
      }
    )
  }

  

}
