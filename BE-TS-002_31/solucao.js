class Produto{
    constructor(nome, quantidade){
        this.nome = nome;
        this.quantidade = quantidade;
    }
}

class Estoque{
    lista = [];

    adicionar(nome, quantidade){
        let produtoAtual = new Produto(nome, quantidade);
        let indiceProduto = this.lista.findIndex(produto => produto.nome == produtoAtual.nome);
        if(indiceProduto != -1){
            this.lista[indiceProduto].quantidade += produtoAtual.quantidade;
            return `${produtoAtual.quantidade} item(s) de ${produtoAtual.nome} adicionado(s)`
        }else{
            this.lista.push({nome : produtoAtual.nome, quantidade : produtoAtual.quantidade})
            return `${produtoAtual.nome} adicionado com ${produtoAtual.quantidade} item(s)`
        }
    }

    remover(nome, quantidade){
        let produtoAtual = new Produto(nome, quantidade);
        let indiceProduto = this.lista.findIndex(produto => produto.nome == produtoAtual.nome);
        if(indiceProduto == -1){
            return `Produto não encontrado`
        } if (this.lista[indiceProduto].quantidade < produtoAtual.quantidade || this.lista[indiceProduto].quantidade == 0) {
            return `Não há quantidade suficiente de ${produtoAtual.nome}  para remoção`
        }else{
            this.lista[indiceProduto].quantidade -= produtoAtual.quantidade;
            return `${produtoAtual.quantidade} item(s) de ${produtoAtual.nome} removido(s)`
        }
    }

    listar(){
        return this.lista;
    }
}

//Teste
const estoque = new Estoque();
console.log(estoque.adicionar("Uva", 1))
console.log(estoque.adicionar("Uva", 2))
console.log(estoque.listar())
console.log(estoque.remover("Uva", 3))
console.log(estoque.listar())
console.log(estoque.remover("Uva", 1))
console.log(estoque.remover("Laranja", 1))
