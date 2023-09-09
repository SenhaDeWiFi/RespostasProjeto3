class Newsletter{
    #emails = [];

    inscrever(email){
        if (this.#emails.includes(email)) {
            return(`E-mail já se encontra cadastrado`)
        }else{
            this.#emails.push(email)
            return(`E-mail cadastrado com sucesso`)
        }
    }

    cancelar(email){

        let indice = this.#emails.findIndex(elemento => elemento == email)

        if (indice == -1 ) {
            return(`E-mail não encontrado na lista`)
        }else{
            this.#emails.splice(indice, 1)
            return(`E-mail removido`)
        }
    }
}

//Teste
const js = new Newsletter();
console.log(js.inscrever("javascripto@js.com"))
console.log(js.inscrever("javascrepto@js.com"))
console.log(js.inscrever("javascleiton@js.com"))
console.log(js.cancelar("javascripto@js.com"))
console.log(js.cancelar("jaca@js.com"))
console.log(js.inscrever("javascripto@js.com"))
