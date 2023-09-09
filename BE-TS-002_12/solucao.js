class Relatorio{
    static mediaSalarial(listaDeEmpregados = [] ){
        let soma = 0;
        listaDeEmpregados.map(a => {
            soma += a.salario});
        return soma/listaDeEmpregados.length;
    }
    static menorSalario(listaDeEmpregados = []){
        listaDeEmpregados.sort((a, b) => b.salario - a.salario)

        return {nome : listaDeEmpregados[0].nome, salario :listaDeEmpregados[0].salario}
    }
    static maiorSalario(listaDeEmpregados = []){
        listaDeEmpregados.sort((a, b) => a.salario - b.salario)
        return {nome : listaDeEmpregados[0].nome, salario :listaDeEmpregados[0].salario}
    }
}

class Empresa {
    listaDeEmpregados = [
      {
        nome: "João Silva",
        salario: 1500,
      },
      {
        nome: "Maria José",
        salario: 2500,
      },
      {
        nome: "Simplício Simplório",
        salario: 2400,
      },
      {
        nome: "Mario João",
        salario: 2100,
      },
    ];
  
    mediaSalarial() {
      return Relatorio.mediaSalarial(this.listaDeEmpregados);
    }
  
    menorSalario() {
      return Relatorio.menorSalario(this.listaDeEmpregados);
    }
    maiorSalario() {
      return Relatorio.maiorSalario(this.listaDeEmpregados);
    }
  }

//Teste
const empreso = new Empresa()
console.log(empreso.mediaSalarial())
console.log(empreso.maiorSalario())
console.log(empreso.menorSalario())