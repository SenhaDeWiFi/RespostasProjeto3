class EsqueciSenhaUtils{
    static tokens = new Map()
    static gerarToken(email){
        this.tokens.set(email , Math.floor(Math.random() * 100000) + 1);
    };
    static validarToken(email, token){
        if (this.tokens.get(email) === token) {
            return true
        }else return false
    }
}

class Usuario {
    usuarios = ["mario@luigi.com", "peach@apple.com"];
  
    constructor(email) {
      this.email = email;
    }
  
    esqueciSenha(email) {
      if (this.usuarios.includes(email)) {
        return EsqueciSenhaUtils.gerarToken(email);
      } else {
        return "E-mail não encontrado";
      }
    }
  
    validarToken(email, token) {
      return EsqueciSenhaUtils.validarToken(email, token);
    }
}

//Teste
const mairo = new Usuario("mario@luigi.com");
tokenDoMairo = mairo.esqueciSenha("mario@luigi.com");
console.log(EsqueciSenhaUtils.validarToken(tokenDoMairo));