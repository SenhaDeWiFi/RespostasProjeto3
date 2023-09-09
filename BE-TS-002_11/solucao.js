class Extrato{
    movimentacoes = []

    transacao(tipo, valor){
        if (tipo  === "C") {
            this.movimentacoes.push({ C : valor})
        } else {
            this.movimentacoes.push({ D : valor})
        }
        
    }
    relatorio(){
        console.log(this.movimentacoes) //deixei pra ficar claro no console como é o retorno, já que o extrato() é void
        return this.movimentacoes;
    }
}
class CaixaEletronico extends Extrato {
    saldo = 0;

    depositar(value) {
      this.saldo += Number(value);
      this.transacao("C", value);
    }

    retirar(value) {
      this.saldo -= Number(value);
      this.transacao("D", value);
    }

    extrato() {
      this.relatorio();
    }
  }

//Teste 
const caixeletronio = new CaixaEletronico();
caixeletronio.depositar(1000)
caixeletronio.retirar(200)
caixeletronio.retirar(200)
console.log(caixeletronio.extrato())