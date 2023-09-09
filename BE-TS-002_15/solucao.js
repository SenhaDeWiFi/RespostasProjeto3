class Newsletter{
    #emails = [];

    signup(email){
        if (this.#emails.includes(email)) {
            return(`E-mail já se encontra cadastrado`)
        }else{
            this.#emails.push(email)
            return(`E-mail cadastrado com sucesso`)
        }
    }
}