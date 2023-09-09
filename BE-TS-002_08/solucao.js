class Pessoa{

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(){
        return "Olá, sou uma pessoa!"
    }
}

class Trabalhador extends Pessoa{
    saudacao(){
        return "Olá, sou um trabalhador!"
    }
}

class Aluno extends Pessoa{
    saudacao(){
        return "Olá, sou um aluno!"
    }
}


//Teste
const roger = new Pessoa("Roger.", 67)
const maico = new Trabalhador("Michael Jackson", 30);
const flavinho = new Aluno("Flavio Yuji", 19)
console.log(roger.saudacao());
console.log(maico.saudacao());
console.log(flavinho.saudacao());