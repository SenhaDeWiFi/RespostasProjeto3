class ListaDeMembros{
    membros = [];
    
    adicionar(nome){
        this.membros.push(nome);
    }
    contar(){
        return this.membros.length;
    }
    mostrarLista(){
        this.membros.forEach(nome =>{
            console.log(nome)
        })
    }
}

//Teste
const minhaLista = new ListaDeMembros();
minhaLista.adicionar("Uvuvwevwevwe")
minhaLista.adicionar("Onyetenyevwe")
minhaLista.adicionar("Ugwemubwem")
minhaLista.adicionar("Ossas")

console.log(minhaLista.contar());
minhaLista.mostrarLista()