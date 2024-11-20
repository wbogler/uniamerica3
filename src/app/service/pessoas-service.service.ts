import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';
import { PessoaRequest } from '../models/pessoa-request';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoasServiceService {

  constructor() { }
  
  http = inject(HttpClient)

  API = environment.rotaEndPoint+"/pessoa"

  findAll(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API+"/findall");
  }

  deleteById(idPessoa:number){
    return this.http.delete<HttpStatusCode.Accepted>(this.API + "/delete/" + idPessoa)
  }

  savePessoa(pesoa:PessoaRequest){
    return this.http.post<Pessoa>(this.API + "/create",pesoa)
  }

  atualizarPessoa(pesoa:PessoaRequest){
    return this.http.put<HttpStatusCode.Created>(this.API + "/atualizar",pesoa)
  }

  findById(idPessoa:number){
    return this.http.get<Pessoa>(this.API + "/findone/" + idPessoa)
  }

  atualizarPessoaComParametros(pessoa: PessoaRequest, idPessoa: number) {
    return this.http.put<Pessoa>(`${this.API}/update`, pessoa, {
      params: new HttpParams().set('id', idPessoa.toString())
    });

}
}
