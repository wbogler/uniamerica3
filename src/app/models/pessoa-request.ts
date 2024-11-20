export class PessoaRequest {

    id!:number
    nome!:String;
    idade!:number;
    doc!:string;
    roles!:number[];
    senha!:string;

    constructor(id:number,nome:String, idade:number, doc:string, roles:number[], senha:string){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.doc = doc;
        this.roles = roles;
        this.senha = senha;
    }
}
