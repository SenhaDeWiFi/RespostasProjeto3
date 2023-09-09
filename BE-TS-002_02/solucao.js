class Pessoa{

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }

}

//Teste
const Joao = new Pessoa("Joao", "Da Silva");
console.log(Joao.nomeCompleto());
const Rubinho = new Pessoa("Rubens", "Barrichelo");
console.log(Rubinho.nomeCompleto());