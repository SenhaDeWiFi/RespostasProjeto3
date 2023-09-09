class Escola{
    alunos = []
    adicionar(nome, nota){
        this.alunos.push({nome : nome, nota : nota});
    }
    notasBaixas(){
        let alaOsBobo = []
        alaOsBobo = this.alunos.filter(a => a.nota <= 5);
        return alaOsBobo
    }
}

//Teste
const escola = new Escola();
escola.adicionar("Albert Einstein", 10)
escola.adicionar("João", 8);
escola.adicionar("Luciana", 7);
escola.adicionar("Luciano", 4);
escola.adicionar("Mariana", 3);
console.log(escola.notasBaixas());