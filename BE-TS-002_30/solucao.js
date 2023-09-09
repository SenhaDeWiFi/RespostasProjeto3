class UtilsFiltrar{
    static porTipoDeClasse(lista, classe){
        let objs = [];
        lista.forEach(element => {
            if (element instanceof classe) {
                objs.push({ nome : element.nome});
            }
        })
        return objs;
    }
}

//Teste
class Aluno {
    nome;
    constructor(nome) {
      this.nome = nome;
    }
  }
  
class Professor {
    nome;
    constructor(nome) {
      this.nome = nome;
    }
  }
  
class Escola {
    pessoas = [];
  
    add(pessoa) {
      this.pessoas.push(pessoa);
    }
  
    listarProfessores() {
      return UtilsFiltrar.porTipoDeClasse(this.pessoas, Professor);
    }
  
    listarAlunos() {
      return UtilsFiltrar.porTipoDeClasse(this.pessoas, Aluno);
    }
  }

  const escola = new Escola();
  escola.add(new Professor("João Prof"));
  escola.add(new Professor("Maria Profa"));
  escola.add(new Aluno("João"));
  escola.add(new Aluno("Maria"));
  
  console.log(escola.listarAlunos());
  // [
  //   { nome: "João Prof" },
  //   { nome: "Maria Profa" },
  // ]