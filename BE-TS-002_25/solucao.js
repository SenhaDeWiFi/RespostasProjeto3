class Categoria{
    constructor(nome){
        this.nome = nome;
    }
}

class Artigo{
    constructor(titulo, categoria = new Categoria("Descategorizado")){
        this.titulo = titulo;
        this.categoria = categoria;
    }

    setCategoria(novaCategoria){
        this.categoria = novaCategoria;
    }

    mostrar(){
        return { Titulo : this.titulo, Categoria : this.categoria}
    }
}

//Teste
const categoria = new Categoria("Javascript");
const artigo = new Artigo("Orientação a Objetos");

console.log(artigo.mostrar())
artigo.setCategoria(categoria)
console.log(artigo.mostrar())