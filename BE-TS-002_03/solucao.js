class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.age = idade;
    }

    sobre(){return this.nome + " tem " + this.age + " anos"}
}

//Teste
const Joao = new Pessoa("Joao", 20);
console.log(Joao.sobre());
const Rubinho = new Pessoa("Rubens", 51);
console.log(Rubinho.sobre());