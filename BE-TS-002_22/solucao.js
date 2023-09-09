class Analisador{
    adicionar(name, email){
        this.name = name;
        this.email = email;
    }

    converterParaObjeto(){
        return {email : this.email , name : this.name}
    }
}

//Teste
const analisador = new Analisador();
analisador.adicionar("João", "joao@email.com");
console.log(analisador.converterParaObjeto());