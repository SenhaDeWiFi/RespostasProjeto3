class Usuario{
    #password;
    constructor(name, username, password){
        this.name = name;
        this.username = username;
        this.#password = password;
    }

    login(username, password){
        if (username == this.username && password == this.#password) {
            return(`Login realizado com sucesso`)
        }else return(`Falha na autenticação`)
    }
}

//Teste
const vi = new Usuario("Vi", "bigHands", "cupcakes")
console.log(vi.login("bigHands", "notcupcakes"))
console.log(vi.login("smallHands", "cupcakes"))
console.log(vi.login("bigHands", "cupcakes"))