class Usuario{
    #email;
    #senha;
    
    constructor(email, senha){
        this.#email = email;
        this.#senha = senha;
        this.contador = 0;
    }

    login(email, senha){
        if (email === this.#email && senha === this.#senha){
            this.contador = 0;
            return(`Login realizado com sucesso`);
        }else this.contador++;

        if (this.contador >= 3) {
            return(`Conta bloqueada, contate o suporte`)
        }else return(`Falha na autenticação`)
    }
}

const js = new Usuario("ala@obobo.com", "Vaca");

console.log(js.login("ala@obobo.com", "Vaca"));
console.log(js.login("ala@obobo.com", "NaoVaca"));
console.log(js.login("ala@obobo.com", "NaoVaca"));
console.log(js.login("ala@obobo.com", "NaoVaca"));
