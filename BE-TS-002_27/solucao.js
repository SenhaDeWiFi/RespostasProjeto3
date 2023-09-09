class Post{
    constructor(titulo, data){
        this.titulo = titulo;
        this.dataDePublicacao = data;
    }
}

class Blog{
    posts = []

    publicar(post){
        this.posts.push(post)
    }

    antigos(){
        this.posts.sort((a, b) => a.dataDePublicacao - b.dataDePublicacao)
        let titulosOrdenados = [];
        this.posts.forEach(element => {
            titulosOrdenados.push(element.titulo);
        });
        return titulosOrdenados;
    }

    novos(){
        this.posts.sort((a, b) => b.dataDePublicacao - a.dataDePublicacao)
        let titulosOrdenados = [];
        this.posts.forEach(element => {
            titulosOrdenados.push(element.titulo);
        });
        return titulosOrdenados;
    }
}

//Teste
const post1 = new Post("Como aprender mais rápido!", new Date(1988, 11, 24));
const post2 = new Post("Como desaprender mais rápido!", new Date(2006, 1, 4));
const blog = new Blog();

blog.publicar(post1);
blog.publicar(post2);

console.log(blog.antigos())
console.log(blog.novos())
