class Animal{
    name;
    corre(velocidade){
        this.velocidade = velocidade * 2 ;
    }

    pare(){
        this.velocidade = 0;
    }

    status(){
        if (this.velocidade == 0) {
            return(`${this.name} está parad@`);
        }else return(`${this.name} corre com velocidade ${this.velocidade}`);

    }
}

class Coelho extends Animal {
    constructor() {
      super();
      this.name = "Coelho";
    }
  } 

//Teste
const cueio = new Coelho();
cueio.corre(5)
console.log(cueio.status());
cueio.pare();
console.log(cueio.status());