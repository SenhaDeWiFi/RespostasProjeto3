class Animal{
    velocidade = 0;
    constructor(tipo, nome){
        this.tipo = tipo;
        this.nome = nome;
    }

    corre(velocidade){
        this.velocidade = velocidade;
    }

    pare(){
        this.velocidade = 0;
    }

    status(){
        if (this.velocidade == 0) {
            return(`${this.tipo} ${this.nome} está parad@`);
        }else return(`${this.tipo} ${this.nome} corre com velocidade ${this.velocidade}`);

    }
}

//Teste
const abner = new Animal("catchurro", "abner");
abner.corre(10);
console.log(abner.status());
abner.pare();
console.log(abner.status());