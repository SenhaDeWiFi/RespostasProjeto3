class Roupa{
    constructor(tipo, tamanho, cor = "...incolor?"){
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.cor = cor;
    }

    sobre(){return this.tipo + " tamanho " + this.tamanho + " tem a cor " + this.cor}
}

//Teste
const camisa1 = new Roupa("Camisa", "M", "azul");
const vestido1 = new Roupa("Calça", "M", "preta");
const brusinha1 = new Roupa("Blusa", "P");

roupas = [ camisa1, vestido1, brusinha1 ];

roupas.forEach(ropa => {
    console.log(ropa.sobre());
});