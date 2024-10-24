import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';
import { PessoaRequest } from '../models/pessoa-request';

@Injectable({
  providedIn: 'root'
})
export class PessoasServiceService {

  constructor() { }
  
  http = inject(HttpClient)

  API = "http://localhost:8080/pessoa"

  findAll(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API);
  }

  deleteById(idPessoa:number){
    return this.http.delete<HttpStatusCode.Accepted>(this.API + "/delete/" + idPessoa)
  }

  savePessoa(pesoa:PessoaRequest){
    return this.http.post<Pessoa>(this.API + "/create",pesoa)
  }

  atualizarPessoa(pesoa:PessoaRequest, idPessoa:number){
    return this.http.put<Pessoa>(this.API + "/update/" + idPessoa,pesoa)
  }

  findById(idPessoa:number){
    return this.http.get<Pessoa>(this.API + "/findone" + idPessoa)
  }

  atualizarPessoaComParametros(pessoa: PessoaRequest, idPessoa: number) {
    return this.http.put<Pessoa>(`${this.API}/update`, pessoa, {
      params: new HttpParams().set('id', idPessoa.toString())
    });

}
}
