class Escola {

    alunos = []
    adicionar(nome, nota){
        this.alunos.push({nome : nome, nota : nota});
    }

    media(){
        let soma = 0;
        this.alunos.map(a => {
            soma += a.nota});
        return soma/this.alunos.length;
    }

    ranking(){
        
        return this.alunos.sort((a, b) => b.nota - a.nota)
    }
}

//Teste
const escola = new Escola();
escola.adicionar("João", 10);
escola.adicionar("Maria", 5);
escola.adicionar("Maurício", 7);
escola.adicionar("Alice", 7);
console.log(escola.media()); // 7.5
console.log(escola.ranking());