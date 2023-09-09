class Animal{
    constructor(nome, som, onomatopeia){
        if (new.target === Animal) {
            throw new Error("instancia um animal que existe, boboca");
        }
        this.nome = nome;
        this.som = som;
        this.onomatopeia = onomatopeia;
    }
    
    sobre(){
        return (` O animal ${this.nome} faz o som de ${this.som} e sua onomatopeia é ${this.onomatopeia}`);
    }
}

class Vaca extends Animal{
    constructor(){
        super("vaca", "mugir", "muuuu")
    }
    mugir(){
        return this.onomatopeia;
    }
}
class Ovelha extends Animal{
    constructor(){
        super("ovelha", "berrar", "méééé")
    }
    berrar(){
        return this.onomatopeia;
    }
}
class Cavalo extends Animal{
    constructor(){
        //super("vacalo", "relinchar", "iiirrrrí")
        super("cavalo", "relinchar", "iiirrrrí")
    }
    relinchar(){
        return this.onomatopeia;
    }
}

//Teste
const Mimosa = new Vaca();
const Beliao = new Ovelha();
const Epona = new Cavalo()

console.log(Mimosa.sobre())
console.log(Beliao.sobre())
console.log(Epona.sobre())
