class Animal{
    constructor(nome, velocidade){
        this.nome = nome;
        this.velocidade = velocidade;
    }
}

class Corrida{
    lista = [];
    constructor(listaDeAnimais){
        this.lista = listaDeAnimais;
    }

    resultado(){
        this.lista.sort((a, b) => b.velocidade - a.velocidade );
        let podio = [this.lista[0].nome, this.lista[1].nome, this.lista[2].nome];
        return podio
    }
}

//Teste
const coelho = new Animal("Coelho", 5);
const cavalo = new Animal("Cavalo", 15);
const cheetah = new Animal("Cheetah", 25);
const onca = new Animal("Onça", 12);
const cachorro = new Animal("cachorro", 9);
const vacaAtomica = new Animal("Vaca Atômica", 99);


const corrida = new Corrida([coelho, cheetah, cavalo, onca, cachorro, vacaAtomica]);

console.log(corrida.resultado()); // ["Cheetah", "Cavalo", "Onça"]);