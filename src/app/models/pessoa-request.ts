export class PessoaRequest {

    nome!:String;
    idade!:number;
    doc!:string;
    roles!:number[];
    senha!:string;

    constructor(nome:String, idade:number, doc:string, roles:number[], senha:string){
        this.nome = nome;
        this.idade = idade;
        this.doc = doc;
        this.roles = roles;
        this.senha = senha;
    }
}
