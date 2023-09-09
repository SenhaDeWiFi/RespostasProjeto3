class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    dizerOi(){ return ("oi meu nome eh " + this.nome + " e eu tenho " + this.idade + " anos")}
}

class Cidadao extends Pessoa{
    constructor(nome, idade, cpf, rg){
        super(nome, idade);
        this.cpf = cpf;
        this.rg = rg;
    }
}


//Teste
const joao = new Pessoa("João da Silva", 20)
const rubinho = new Cidadao("Rubens Barrichelo", 51, "100110001100", "01000101")
console.log(joao.dizerOi())
console.log(rubinho.dizerOi())