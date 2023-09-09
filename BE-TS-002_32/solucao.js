class Usuario{
    #senhas = [];
    constructor(primeiraSenha){
        this.#senhas.unshift(primeiraSenha);
    };

    alterarSenha(novaSenha){
        if (this.#senhas.includes(novaSenha)) {
            return(`Senha nova não pode ser igual às três últimas`)
        }else{
            if (this.#senhas.length == 3) {
                this.#senhas.pop();
            }
            this.#senhas.unshift(novaSenha)
            return(`Senha alterada com sucesso`)
        }
    }
}

//Teste
const usuario = new Usuario("senha1");

console.log(usuario.alterarSenha("senha2"))
console.log(usuario.alterarSenha("senha2"))
console.log(usuario.alterarSenha("senha3"))
console.log(usuario.alterarSenha("senha1"))
console.log(usuario.alterarSenha("senha4"))
console.log(usuario.alterarSenha("senha1"))
