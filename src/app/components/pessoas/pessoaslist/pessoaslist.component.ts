import { Component, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { Pessoa } from '../../../models/pessoa';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PessoasdetailsComponent } from "../pessoasdetails/pessoasdetails.component";
import { PessoasServiceService } from '../../../service/pessoas-service.service';
import { find } from 'rxjs';

@Component({
  selector: 'app-pessoaslist',
  standalone: true,
  imports: [RouterLink, CommonModule, MdbModalModule, PessoasdetailsComponent],
  templateUrl: './pessoaslist.component.html',
  styleUrl: './pessoaslist.component.scss'
})
export class PessoaslistComponent {

  //para abrir a modal
  modalService = inject(MdbModalService);

  //referencia do template da modal no HTML
  @ViewChild('modalPessoaDetails') modalPessoaDetails!: TemplateRef<any>;

  //referência da modal para conseguirmos fechar
  modalRef!:MdbModalRef<any>;

  constructor(){

    this.findAll()

    const navigation = this.router.getCurrentNavigation();

    const pessoaNova = navigation?.extras.state?.['pessoaNova'];

    const pessoaEditada = navigation?.extras.state?.['pessoaEditada'];

    if(pessoaEditada){
      let indice = this.pessoas.findIndex(
        x => {return x.id == pessoaEditada.id}
      )
      this.pessoas[indice] = pessoaEditada

    }else if(pessoaNova){

      pessoaNova.id = this.pessoas.length + 1
      this.pessoas.push(pessoaNova)
    }

  }

  tebleHead:string[] = ["id","nome","idade","documento"]
  pessoas:Pessoa[] = []

  router = inject(Router)

  pessoaEdit:Pessoa = new Pessoa()

  novo(){
    this.pessoaEdit = new Pessoa()
    this.modalRef = this.modalService.open(this.modalPessoaDetails)
  }

  edit(pessoa:Pessoa){
    this.pessoaEdit = Object.assign({}, pessoa)
    this.modalRef = this.modalService.open(this.modalPessoaDetails)
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
            alert("problema")
          }
        }
      )
    }
    
  }

  retornoDetalhe(pessoa:Pessoa){
    this.findAll()
    this.modalRef.close()
    this.findAll()
  }

  //primeira coisa: injetar o service
  pessoaService = inject(PessoasServiceService)

  //crie a sua função
  findAll(){
    this.pessoaService.findAll().subscribe(
      {
        next: value =>
        {
          this.pessoas = value
        },
        error: erro =>
        {
          alert("problema")
        }
      }
    )
  }

  

}
